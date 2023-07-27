import React from "react";
import type { BlogCardProps } from "./View.types";
import Link from "next/link";
import { formatDate } from "@/src/helpers";

const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<Link
			href={`/blog/${post.slug}`}
			className="group w-full bg-primary-300 relative rounded-md h-full mb-[10px] p-4"
		>
			<div className="relative h-full">
				<h2 className="card-title text-[16px] mb-5 font-medium text-txt-300 group-hover:text-accent transition ease-in delay-50">
					{post.title}
				</h2>
				<p className="font-medium text-txt-300">{formatDate(post.date)}</p>
				<div className="mb-3 min-h-[60px]">
					<p className="font-light text-txt-200">{post.description}</p>
				</div>
				<div className="absolute bottom-0">
					<p className="font-medium text-txt-100">
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
