import TemplateLayout from "@/src/templates/Layout";
import type { GetStaticProps, GetStaticPaths } from "next";
import { getPostFromSlug, getSlugs } from "../api/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import { MDXPostProps } from "./types";
import Image from "next/image";
import "highlight.js/styles/atom-one-dark.css";

export default function BlogPostPage({ post }: { post: MDXPostProps }) {
	return (
		<TemplateLayout pageTitle={post.meta.title}>
			<section className="layout min-h-mobile sm:min-h-desktop">
				<h1 className="text-lg">{post.meta.title}</h1>
				<MDXRemote {...post.source} components={{ Image }} />
			</section>
		</TemplateLayout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string };
	const { content, meta } = getPostFromSlug(slug);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [rehypeSlug, rehypeHighlight],
		},
	});

	return {
		props: {
			post: { source: mdxSource, meta },
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs().map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
