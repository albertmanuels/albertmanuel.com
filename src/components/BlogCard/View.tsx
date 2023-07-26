import React from "react";
import type { BlogCardProps } from "./View.types";
import Link from "next/link";
import { formatDate } from "@/src/helpers";

const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<Link
			href={`/blog/${post.slug}`}
			className="w-full bg-zinc-800 relative rounded-md h-full mb-[10px] p-4"
		>
			<div className="relative h-full">
				<h2 className="text-[16px] mb-5 font-medium">{post.title}</h2>
				<p className="font-medium">{formatDate(post.date)}</p>
				<div className="mb-3 min-h-[60px]">
					<p className="font-light">{post.description}</p>
				</div>

				<div className="absolute bottom-0">
					<p className="font-medium text-slate-300">
						{post.tags.map((tag) => (
							<Link className="mr-2" key={tag} href={`/tag/${tag}`}>
								{tag}
							</Link>
						))}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
