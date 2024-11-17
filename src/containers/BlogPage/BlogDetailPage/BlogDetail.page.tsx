import React from "react";
import { blogPosts } from ".velite";
import { notFound } from "next/navigation";
import MDXContent from "@/src/components/MdxContent";
import { formatDate } from "@/src/helpers";
import CloudinaryImage from "@/src/components/CloudinaryImage";

type BlogDetailProps = {
  params: {
    blogSlug: string;
  };
};

const getCourseFromParams = async (params: BlogDetailProps["params"]) => {
  const slug = params?.blogSlug;
  const blog = blogPosts.find((blog) => blog.slugAsParams === slug);

  return blog;
};

const BlogDetailPage = async ({ params }: BlogDetailProps) => {
  const blog = await getCourseFromParams(params);

  if (!blog || !blog.published) {
    notFound();
  }
  return (
    <section className="pb-5 layout-post-content">
      <CloudinaryImage
        className="mb-4"
        publicId={blog.thumbnail}
        width={1200}
        height={(200 * 3) / 3}
        aspect={{ width: 12, height: 4 }}
        alt="profile pict"
        mdx={false}
      />
      <h1 className="mb-3 text-4xl font-bold text-primary-200 dark:text-txt-300">
        {blog.title}
      </h1>
      <p className="mb-3 font-light text-md text-primary-200 dark:text-txt-300">
        Written on {formatDate(blog.date)}
      </p>
      <hr />
      <div className="flex gap-5">
        <article className="inline-block w-3/4 col-span-3 pt-4 text-lg blog text-primary-200 dark:text-txt-300">
          <MDXContent code={blog.body} />
        </article>

        <div className="w-1/4 sticky max-h-[30vh] top-40 mt-5 bg-primary-200">
          <h3 className="text-xl text-center">Table of Contents</h3>
          <ul>
            <li>Sub 1</li>
            <li>Sub 2</li>
            <li>Sub 3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
