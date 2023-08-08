import TemplateLayout from "../templates/Layout";
import { PostMeta } from "./api/types";
import getAllBlogPosts from "./api/api";
import BlogCard from "../components/BlogCard/View";

const sortData = (data: PostMeta[]) => {
	return data.sort(
		(a: { date: string }, b: { date: string }) =>
			Number(new Date(b.date)) - Number(new Date(a.date))
	);
};

export default function BlogPage({ posts }: { posts: PostMeta[] }) {
	return (
		<TemplateLayout pageTitle="Blog">
			<section className="layout pt-[24px]">
				<h4 className="mb-5 text-md font-medium text-txt-200">
					So, here is my digital garden where I share my knowledge and things
					that I have learned.
				</h4>
				{posts.length === 0 ? (
					<div className="flex w-full align-middle justify-center">
						<p className="text-xl">Sorry, no articles are currently posted</p>
					</div>
				) : (
					<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
						{sortData(posts).map((post) => (
							<BlogCard key={post.slug} post={post} />
						))}
					</div>
				)}
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
