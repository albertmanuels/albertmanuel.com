import TemplateLayout from "@/src/templates/Layout";
import type { GetStaticProps, GetStaticPaths } from "next";
import { getPostData, getSlugs } from "../api/api";
import { formatDate } from "@/src/helpers";
import CloudinaryImage from "@/src/components/CloudinaryImage/View";
import MDXComponents from "@/src/components/MDXComponents";
import { BlogType } from "../api/types";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";

export default function BlogPostPage({ code, frontmatter }: BlogType) {
	const Component = useMemo(() => getMDXComponent(code), [code]);
	return (
		<TemplateLayout pageTitle={frontmatter.title}>
			<section className="layout-post-content min-h-mobile sm:min-h-desktop pt-5 gap-4">
				<CloudinaryImage
					className="mb-4 object-cover"
					publicId={`albertmanuel/banner/${frontmatter.banner}`}
					width={1200}
					height={(1200 * 2) / 8}
					aspect={{ width: 8, height: 2 }}
					alt="banner"
				/>

				<h1 className="not-prose text-[30px] font-semibold text-txt-300 mb-1">
					{frontmatter.title}
				</h1>
				<p className="not-prose font-light text-txt-200 m-0">
					Published on {formatDate(frontmatter.date)}
				</p>
				<p className="m-0 mb-3">Written by Albert Manuel</p>
				<span className="block w-full h-[1px] bg-txt-100 mb-5" />
				<article className="prose">
					<Component components={{ ...MDXComponents }} />
				</article>
			</section>
		</TemplateLayout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string };
	const data = await getPostData(slug);
	const post = JSON.parse(JSON.stringify(data));

	return {
		props: { ...post },
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs().map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
