import TemplateLayout from "../templates/Layout";
import { PostMeta } from "./api/types";
import getAllBlogPosts from "./api/api";

import dynamic from "next/dynamic";

const BlogCard = dynamic(() => import("@/src/components/BlogCard"), {
	ssr: false,
});

const sortData = (data: PostMeta[]) => {
	return data.sort(
		(a: { date: string }, b: { date: string }) =>
			Number(new Date(b.date)) - Number(new Date(a.date))
	);
};

export default function BlogPage({ posts }: { posts: PostMeta[] }) {
	return (
		<TemplateLayout pageTitle="Blog">
			<section className="layout min-h-mobile sm:min-h-desktop pt-5">
				<h1 className="mb-4 font-light text-gray-300">
					Thoughts, tutorials, about front-end development.
				</h1>
				<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{sortData(posts).map((post) => (
						<BlogCard key={post.slug} post={post} />
					))}
				</div>
			</section>
		</TemplateLayout>
	);
}

export async function getStaticProps() {
	const posts = getAllBlogPosts().map((post) => post.meta);

	return {
		props: {
			posts,
		},
	};
}
