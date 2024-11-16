import React from "react";
import { blogPosts } from ".velite";
import BlogCard from "@/src/components/BlogCard";

const BlogPage = () => {
  const noPublised = blogPosts.every((item) => !item.published);
  return (
    <section>
      <h1 className="mb-3 text-5xl font-semibold not-prose text-primary-200 dark:text-txt-300">
        Blog
      </h1>
      <hr className="mb-6" />
      {noPublised && (
        <div className="flex items-center justify-center">
          <h1>No Post Published</h1>
        </div>
      )}

      <ul className="grid gap-10 pb-10 sm:grid-cols-3">
        {blogPosts
          .filter((item) => item.published)
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
      </ul>
    </section>
  );
};

export default BlogPage;
