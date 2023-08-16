import React from "react";
import type { BlogCardProps } from "./View.types";
import Link from "next/link";
import { formatDate } from "@/src/helpers";
import CloudinaryImage from "../CloudinaryImage/View";

const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<Link
			href={`/blog/${post.slug}`}
			className="group w-full relative flex flex-col border border-1 border-primary-300 dark:border-txt-300 hover:border-accent dark:hover:border-accent rounded-md mb-[10px] transition-border ease-in-out delay-150"
		>
			<div className="w-full">
				<CloudinaryImage
					className="mb-2 rounded-t-md object-cover"
					publicId={`albertmanuel/banner/${post.thumbnail}`}
					width={1200}
					height={(1200 * 2) / 4}
					aspect={{ width: 4, height: 2 }}
					alt="banner"
				/>
			</div>
			<div className="px-5 py-3 h-full">
				<h2 className="text-xl mb-1 font-medium text-primary-200 dark:text-txt-300 group-hover:text-accent transition ease-in delay-50">
					{post.title}
				</h2>
				<p className="text-md font-light  text-primary-200 dark:text-txt-300 mb-5">
					{formatDate(post.date)}
				</p>
				<p className="font-medium text-primary-300 dark:text-txt-100 flex flex-row">
					{post.tags.map((tag) => (
						<span key={tag} className="flex flex-row mr-2">
							#{tag}
						</span>
					))}
				</p>
			</div>
		</Link>
	);
};

export default BlogCard;
