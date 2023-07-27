import TemplateLayout from "@/src/templates/Layout";
import type { GetStaticProps, GetStaticPaths } from "next";
import { getPostFromSlug, getSlugs } from "../api/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight/lib";
import Image from "next/image";
import "highlight.js/styles/github-dark.css";

import { formatDate } from "@/src/helpers";

import type { MDXPostProps } from "@/src/types";
import Breadcrumb from "@/src/components/Breadcrumb/View";

export default function BlogPostPage({ post }: { post: MDXPostProps }) {
	return (
		<TemplateLayout pageTitle={post.meta.title}>
			<section className="layout-post-content min-h-mobile sm:min-h-desktop pt-5">
				<Breadcrumb post={post} />

				<Image
					className="h-[300px] mb-4"
					src={post.meta.banner}
					width={1200}
					height={780}
					style={{ objectFit: "cover" }}
					alt="thumbnail"
				/>

				<article className="prose prose-headings:text-txt-300 prose-blockquote:text-txt-300 prose-p:text-txt-200 prose-headings:mt-0 prose-h2:mb-[16px] prose-h3:mb-2">
					<h1 className="not-prose text-[30px] font-semibold text-slate-100 mb-1">
						{post.meta.title}
					</h1>
					<p className="font-light text-slate-300 m-0 mb-3">
						{formatDate(post.meta.date)}, by Albert Manuel
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
