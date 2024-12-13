import React from "react";
import { notFound } from "next/navigation";
import { fetchBySlug, fetchPageBlocks, notion } from "@/src/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

type BlogDetailProps = {
  params: {
    blogSlug: string;
  };
};

const BlogDetailPage = async ({ params: { blogSlug } }: BlogDetailProps) => {
  const blog = await fetchBySlug(blogSlug);

  if (!blog) {
    notFound();
  }
  const blocks = await fetchPageBlocks(blog.id);

  const renderer = new NotionRenderer({
    client: notion,
  });
  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  return (
    <section className="pb-5 layout-post-content">
      <h1 className="mb-3 text-4xl font-bold text-primary-200 dark:text-txt-300">
        {blog.properties.title.title[0].text.content}
      </h1>
      {/* <p className="mb-3 font-light text-md text-primary-200 dark:text-txt-300">
        Written on {formatDate(blog.date)}
      </p> */}
      {/* <CloudinaryImage
        className="mb-4"
        publicId={blog.thumbnail}
        width={1200}
        height={(200 * 3) / 3}
        aspect={{ width: 12, height: 4 }}
        alt="profile pict"
        mdx={false}
      /> */}
      <hr />
      <div className="flex gap-5">
        <article
          className="inline-block col-span-3 pt-4 text-lg blog text-primary-200 dark:text-txt-300"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
};

export default BlogDetailPage;
