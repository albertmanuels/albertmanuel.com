import React from "react";
import { fetchPages } from "@/src/lib/notion";
import BlogCard from "@/src/components/BlogCard";

export const BlogPage = async () => {
  const posts = await fetchPages();

  return (
    <section>
      <h1 className="mb-3 text-5xl font-semibold text-primary-200 dark:text-txt-300">
        Blog
      </h1>
      <hr className="mb-6" />
      {posts.results.length < 1 && (
        <div className="flex items-center justify-center">
          <h1 className="dark:text-txt-300 text-primary-100">
            No Post Published
          </h1>
        </div>
      )}

      <ul className="grid gap-5 pb-10 sm:grid-cols-2 md:grid-cols-3">
        {posts.results.map((post: any) => {
          const normalizedBlogData = {
            title: post.properties.title.title[0].text.content,
            slug: post.properties.slug.rich_text[0].plain_text,
            createdAt: post.properties.createdAt.created_time,
            description: post.properties.description.rich_text[0].plain_text,
          };

          return <BlogCard key={post.id} blog={normalizedBlogData} />;
        })}
      </ul>
    </section>
  );
};

export default BlogPage;
