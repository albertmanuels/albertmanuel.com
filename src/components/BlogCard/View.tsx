"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { formatDate } from "@/src/helpers";

const BlogCard = ({ blog }: { blog: BlogCardProps }) => {
  const updateCursor = ({ x, y }: { x: string; y: string }) => {
    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--y", y);
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = String(event.clientX);
      const y = String(event.clientY);
      updateCursor({ x, y });
    };

    if (document) {
      document.body.addEventListener("pointermove", handlePointerMove);
    }

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <Link
      prefetch={true}
      href={`${blog.slug}`}
      className="blogCard group w-full relative flex flex-col border border-1 border-primary-300 dark:border-gray-500 hover:border-primary-100 rounded-md mb-[10px] delay-75"
    >
      <div className="min-h-[20dvh] px-5 py-3">
        <h2 className="mb-1 text-2xl font-medium transition ease-in text-primary-200 dark:text-txt-300">
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
