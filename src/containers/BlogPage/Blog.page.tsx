import React from "react";
import { blogPosts } from ".velite";
import BlogCard from "@/src/components/BlogCard";

const BlogPage = () => {
  return (
    <section className="gap-4 layout-post-content min-h-mobile md:min-h-desktop">
      <h1 className="not-prose text-[30px] font-semibold text-primary-200 dark:text-txt-300 mb-1">
        Blog
      </h1>
      <hr className="mb-6" />
      <ul className="grid gap-3 pb-10 sm:grid-cols-3 md:px-4">
        {blogPosts
          .filter((item) => item.published)
          .sort((a, b) => a.date.localeCompare(b.date))
          .map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
      </ul>
    </section>
  );
};

export default BlogPage;
