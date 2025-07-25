import BlogHero from "@/components/BlogHero";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import { TITLE } from "@/constants/global";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  try {
    const params = await props.params;
    const { frontmatter } = await loadBlogPost(params.slug);

    return {
      title: `${frontmatter.title} ᐧ ${TITLE}`,
      description: frontmatter.description,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: `Blog Post ᐧ ${TITLE}`,
      description: "Blog post not found",
    };
  }
};

async function BlogDetail(props: { params: Promise<{ slug: string }> }) {
  try {
    const params = await props.params;

    const { frontmatter, content } = await loadBlogPost(params.slug);

    return (
      <div className="pt-12">
        <BlogHero
          title={frontmatter.title}
          description={frontmatter.description}
          publishedOn={frontmatter.publishedOn}
          tags={frontmatter.tags}
        />

        <div className="prose">
          <article>
            <MDXRemote source={content} components={{ pre: CodeSnippet }} />
          </article>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    return (
      <div className="pt-12">
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
        <p className="mt-4">
          Sorry, we couldn&apos;t find the blog post you&apos;re looking for.
        </p>
      </div>
    );
  }
}

export default BlogDetail;
