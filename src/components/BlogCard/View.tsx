"use client";
import React from "react";
import Link from "next/link";
import { formatDate } from "@/src/helpers";

const BlogCard = ({ blog }: { blog: BlogCardProps }) => {
  return (
    <Link
      href={`${blog.slug}`}
      className="group w-full relative flex flex-col border border-1 border-primary-300 dark:border-txt-300 hover:border-accent dark:hover:border-accent rounded-md mb-[10px] transition-border ease-in-out delay-50"
    >
      <div className="min-h-[20vh] max-h-[22vh] px-5 py-3">
        <h2 className="mb-1 text-2xl font-medium transition ease-in text-primary-200 dark:text-txt-300 group-hover:text-accent delay-50">
          {blog.title}
        </h2>
        <p className="mb-5 font-light text-md text-primary-200 dark:text-txt-300">
          {formatDate(blog.date)}
        </p>
        <p className="font-light text-md text-primary-200 dark:text-white">
          {blog.description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
