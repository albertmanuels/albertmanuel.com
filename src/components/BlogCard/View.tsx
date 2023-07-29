import React from "react";
import type { BlogCardProps } from "./View.types";
import Link from "next/link";
import { formatDate } from "@/src/helpers";
import Image from "next/image";

const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<Link
			href={`/blog/${post.slug}`}
			className="group w-full h-full relative flex flex-col border border-1 border-txt-300 rounded-md mb-[10px]"
		>
			<div className="w-full">
				<Image
					className="rounded-t-md"
					src={post.banner}
					width={300}
					height={80}
					style={{ aspectRatio: 4 / 2 }}
					alt="thumbnail"
				/>
			</div>
			<div className="h-full p-3">
				<h2 className="card-title text-[16px] mb-5 font-medium text-txt-300 group-hover:text-accent transition ease-in delay-50">
					{post.title}
				</h2>
				<p className="font-medium text-txt-300">{formatDate(post.date)}</p>
				<div className="mb-3 min-h-[60px]">
					<p className="font-light text-txt-200">{post.description}</p>
				</div>
				<div>
					<p className="font-medium text-txt-100 flex flex-row">
						{post.tags.map((tag) => (
							<span key={tag} className="flex flex-row mr-2">
								#{tag}
							</span>
						))}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
