import TemplateLayout from "../templates/Layout";
import { PostMeta } from "./api/types";
import { getAllBlogPosts } from "./api/api";
import BlogCard from "../components/BlogCard";

export default function BlogPage({ posts }: { posts: PostMeta[] }) {
	return (
		<TemplateLayout pageTitle="Blog">
			<section className="layout min-h-mobile sm:min-h-desktop">
				<h1 className="mb-4">There i share stuff that i learn</h1>
				<ul className="flex flex-row flex-wrap gap-6">
					{posts.map((post) => (
						<li key={post.slug}>
							<BlogCard post={post} />
						</li>
					))}
				</ul>
			</section>
		</TemplateLayout>
	);
}

export async function getStaticProps() {
	const posts = getAllBlogPosts()
		.slice(0, 9)
		.map((post) => post.meta);

	return {
		props: {
			posts,
		},
	};
}
