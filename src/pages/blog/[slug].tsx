import TemplateLayout from "@/src/templates/Layout";
import type { GetStaticProps, GetStaticPaths } from "next";
import { getPostFromSlug, getSlugs } from "../api/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight/lib";
import Image from "next/image";
import "highlight.js/styles/atom-one-dark.css";
import { formatDate } from "@/src/helpers";
import type { MDXPostProps } from "@/src/types";

export default function BlogPostPage({ post }: { post: MDXPostProps }) {
	return (
		<TemplateLayout pageTitle={post.meta.title}>
			<section className="layout-post-content min-h-mobile sm:min-h-desktop pt-5">
				<Image
					className="h-[300px] mb-4"
					src={post.meta.banner}
					width={1200}
					height={780}
					style={{ objectFit: "cover" }}
					alt="banner"
				/>

				<article className="prose">
					<h1 className="not-prose text-[30px] font-semibold text-txt-300 mb-1">
						{post.meta.title}
					</h1>
					<p className="not-prose font-light text-txt-200 m-0 mb-3">
						{formatDate(post.meta.date)} by Albert Manuel
					</p>
					<span className="block w-full h-[1px] bg-txt-100 mb-5" />
					<MDXRemote {...post.source} components={{ Image }} />
				</article>
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
