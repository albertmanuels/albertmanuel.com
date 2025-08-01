import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import BlogHero from "@/components/BlogHero";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import { TITLE } from "@/constants/global";
import { loadBlogPost } from "@/helpers/file-helpers";
import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import Link from "next/link";

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  try {
    const params = await props.params;
    const result = await loadBlogPost(params.slug);

    if (!result) {
      return {
        title: `Blog Post ᐧ ${TITLE}`,
        description: "Blog post not found",
      };
    }

    const { frontmatter } = result;

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

    const result = await loadBlogPost(params.slug);

    if (!result) {
      return (
        <div className="min-h-[40vh] flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-4">
            Blog post not found or unpublished
          </h2>
          <p className="mb-6 text-muted">
            The blog post you are looking for does not exist or is not published
            yet.
          </p>
          <Link
            href="/"
            className="inline-block text-white font-semibold transition"
          >
            Back to Home
          </Link>
        </div>
      );
    }

    const { frontmatter, content } = result;

    return (
      <div className="pt-12 pb-20">
        <BlogHero
          title={frontmatter.title}
          description={frontmatter.description}
          publishedOn={frontmatter.publishedOn}
          tags={frontmatter.tags}
        />

        <div className="prose">
          <article>
            <MDXRemote
              source={content}
              components={{
                pre: CodeSnippet,
                Hr: () => <hr className="my-8" />,
                h1: (props) => <HeadingWithAnchor as="h1" {...props} />,
                h2: (props) => <HeadingWithAnchor as="h2" {...props} />,
                h3: (props) => <HeadingWithAnchor as="h3" {...props} />,
                h4: (props) => <HeadingWithAnchor as="h4" {...props} />,
              }}
            />
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
