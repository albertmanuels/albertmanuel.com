import PostCard from "@/components/PostCard";
import { getBlogPosts } from "@/helpers/file-helpers";
import React from "react";

async function Blogs() {
  const posts = await getBlogPosts();
  return (
    <div>
      <h1 className="font-bold">Blogs</h1>
      {posts.map(({ slug, ...delegated }) => (
        <PostCard key={slug} metadata={{ slug, ...delegated }} />
      ))}
    </div>
  );
}

export default Blogs;
