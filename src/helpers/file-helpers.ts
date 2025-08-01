import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";

interface PostMeta {
	slug: string;
	publishedOn: string;
	title: string;
	description: string;
	tags?: string[];
	featured: boolean;
	published: boolean;
}

export async function getBlogPosts() {
	try {
		const fileNames = await readDirectory("./src/content");

		const blogPosts: PostMeta[] = [];

		for (const fileName of fileNames) {
			const rawContent = await readFile(`./src/content/${fileName}`);

			const { data: frontmatter } = matter(rawContent) as unknown as {
				data: Omit<PostMeta, "slug">;
			};

			blogPosts.push({
				...frontmatter,
				slug: fileName.replace(".mdx", ""),
			});
		}

		return blogPosts
			.filter((blog) => blog.published)
			.sort((p1, p2) => {
				return p1.publishedOn < p2.publishedOn ? 1 : -1;
			});
	} catch (error) {
		console.error("Error loading blog posts:", error);
		return [];
	}
}

export const loadBlogPost = cache(async function loadBlogPost(slug: string) {
	try {
		const rawContent = await readFile(`./src/content/${slug}.mdx`);
		const { data: frontmatter, content } = matter(rawContent);
		const inferedFrontmatter = frontmatter as PostMeta;

		// Prevent access if not published
		if (!inferedFrontmatter.published) {
			return null
		}

		return { frontmatter: inferedFrontmatter, content };
	} catch (error) {
		console.error(`Failed to load blog post: ${slug}`, error);
		throw new Error(`Blog post not found: ${slug}`);
	}
});

function readFile(localPath: string) {
	return fs.readFile(path.join(process.cwd(), localPath), "utf-8");
}

function readDirectory(localPath: string) {
	return fs.readdir(path.join(process.cwd(), localPath));
}
