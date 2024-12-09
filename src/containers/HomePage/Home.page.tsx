import Link from "next/link";
import React from "react";
import { blogPosts } from ".velite";
import BlogCard from "@/src/components/BlogCard";

const HomePage = () => {
  return (
    <article className="flex flex-col gap-5 pt-8">
      <div className="w-full min-h-[12vh]">
        <h1 className="text-5xl font-bold text-primary-200 dark:text-white">
          Hi!
        </h1>
        <h1 className="mb-4 text-5xl font-bold text-primary-200 dark:text-white">
          You can call me{" "}
          <span className="border-b-2 border-dotted border-accent text-primary-200 dark:text-white">
            Albert
          </span>
        </h1>
        <p className="w-full mb-5 text-xl text-primary-200 dark:text-txt-100 md:w-4/5">
          I am a software engineer working with JavaScript in web ecosystem.
        </p>
        <div className="flex items-center gap-4 mb-14">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 font-semibold border border-transparent rounded-md dark:text-txt-300 bg-subAccent"
          >
            Resume
          </Link>
          <Link
            prefetch
            href="/about"
            className="inline-block px-4 py-2 font-semibold border rounded-md border-primary-100 dark:border-subAccent text-primary-200 dark:text-txt-300"
          >
            Learn more about me
          </Link>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-primary-200 dark:text-white">
            Featured Blogs
          </h2>
          <Link
            href="/blog"
            className="delay-100 text-primary-200 dark:text-txt-200 hover:dark:text-txt-300 hover:delay-100"
          >
            Show more
          </Link>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {blogPosts
            .filter((item) => item.published && item.featured)
            .map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
        </ul>
      </div>
    </article>
  );
};

export default HomePage;
