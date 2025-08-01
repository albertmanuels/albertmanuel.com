import React from "react";
import PostCard from "@/components/PostCard";
import { getBlogPosts } from "@/helpers/file-helpers";

async function Blogs() {
	const posts = await getBlogPosts();
	return (
		<div className="pt-12">
			<h1 className="font-bold">Blogs</h1>
			<ul className="flex flex-col gap-6">
				{posts.map(({ slug, ...delegated }) => (
					<PostCard key={slug} metadata={{ slug, ...delegated }} />
				))}
			</ul>
		</div>
	);
}

export default Blogs;
