import React from "react";
import { BlogCardProps } from "./types";
import Link from "next/link";

const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<Link href={`/blog/${post.slug}`}>
			<div className="border rounded-md border-gray-500 w-[350px] mb-[10px] p-2">
				<p>Title: {post.title}</p>
				<p>Description: {post.description}</p>

				{post.tags.map((tag) => (
					<Link className="mr-1" key={tag} href={`/tag/${tag}`}>
						{tag}
					</Link>
				))}
			</div>
		</Link>
	);
};

export default BlogCard;
