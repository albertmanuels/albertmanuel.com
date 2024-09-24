"use client";
import React from "react";
import Link from "next/link";
import { formatDate } from "@/src/helpers";
import CloudinaryImage from "../CloudinaryImage/View";

const BlogCard = ({ post }: { post: any }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group w-full relative flex flex-col border border-1 border-primary-300 dark:border-txt-300 hover:border-accent dark:hover:border-accent rounded-md mb-[10px] transition-border ease-in-out delay-150"
    >
      <div className="w-full">
        <CloudinaryImage
          className="object-cover mb-2 rounded-t-md"
          publicId={`albertmanuel/banner/${post.thumbnail}`}
          width={1200}
          height={(1200 * 2) / 4}
          aspect={{ width: 4, height: 2 }}
          alt="banner"
        />
      </div>
      <div className="h-full px-5 py-3">
        <h2 className="mb-1 text-xl font-medium transition ease-in text-primary-200 dark:text-txt-300 group-hover:text-accent delay-50">
          {post.title}
        </h2>
        <p className="mb-5 font-light text-md text-primary-200 dark:text-txt-300">
          {formatDate(post.date)}
        </p>
        {/* <p className="flex flex-row font-medium text-primary-300 dark:text-txt-100">
          {post.tags.map((tag) => (
            <span key={tag} className="flex flex-row mr-2">
              #{tag}
            </span>
          ))}
        </p> */}
      </div>
    </Link>
  );
};

export default BlogCard;
