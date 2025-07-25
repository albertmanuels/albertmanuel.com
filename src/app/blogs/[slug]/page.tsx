import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import { TITLE } from "@/constants/global";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { frontmatter } = await loadBlogPost(params.slug);

  return {
    title: `${frontmatter.title} ᐧ ${TITLE}`,
    description: frontmatter.description,
  };
};

async function BlogDetail({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await loadBlogPost(params.slug);

  return (
    <div className="pt-12">
      <h1 className="font-bold">{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <p className="text-sm text-gray-500">
        Published on {frontmatter.publishedOn}
      </p>
      <div className="prose">
        <article>
          <MDXRemote source={content} components={{ pre: CodeSnippet }} />
        </article>
      </div>
    </div>
  );
}

export default BlogDetail;
