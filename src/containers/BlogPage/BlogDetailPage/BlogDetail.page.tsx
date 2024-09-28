import React from "react";
import { blogPosts } from ".velite";
import { notFound } from "next/navigation";
import MDXContent from "@/src/components/MdxContent";
import { formatDate } from "@/src/helpers";
import CloudinaryImage from "@/src/components/CloudinaryImage";

type BlogDetailProps = {
  params: {
    slug: string[];
  };
  searchParams: string;
};

const getCourseFromParams = async (params: BlogDetailProps["params"]) => {
  const slug = params?.slug?.join("/");
  const blog = blogPosts.find((blog) => blog.slugAsParams === slug);

  return blog;
};

const BlogDetailPage = async ({ params }: BlogDetailProps) => {
  const blog = await getCourseFromParams(params);

  if (!blog || !blog.published) {
    notFound();
  }
  return (
    <section className="pb-5 layout-post-content min-h-mobile md:min-h-desktop">
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
      <article className="pt-4 text-lg text-primary-200 dark:text-txt-300">
        <MDXContent code={blog.body} />
      </article>
    </section>
  );
};

export default BlogDetailPage;
