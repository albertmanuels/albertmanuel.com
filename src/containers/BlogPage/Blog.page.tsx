import React from "react";
import { blogPosts } from ".velite";
import BlogCard from "@/src/components/BlogCard";

const BlogPage = () => {
  const noPublised = blogPosts.every((item) => !item.published);
  return (
    <section className="gap-4 layout-post-content min-h-mobile md:min-h-desktop">
      <h1 className="mb-1 text-4xl font-semibold not-prose text-primary-200 dark:text-txt-300">
        Blog
      </h1>
      <hr className="mb-6" />
      {noPublised && (
        <div className="flex items-center justify-center">
          <h1>No Post Published</h1>
        </div>
      )}

      <ul className="grid gap-3 pb-10 sm:grid-cols-3">
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
