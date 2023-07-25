import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import type { Post } from "./types";

const POSTS_PATH = path.join(process.cwd(), "src/contents", "blog");

export const getSlugs = () => {
	const paths = sync(`${POSTS_PATH}/*.mdx`);

	return paths.map((path) => {
		const parts = path.split("/");
		const fileName = parts[parts.length - 1];
		const [slug, _ext] = fileName.split(".");

		return slug;
	});
};

export const getPostFromSlug = (slug: string): Post => {
	const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
	const source = fs.readFileSync(postPath);
	const { content, data } = matter(source);

	return {
		content,
		meta: {
			slug,
			date: (data.date ?? new Date()).toString(),
			tags: (data.tags ?? []).sort(),
			title: data.title ?? slug,
			description: data.description ?? "",
		},
	};
};

export const getAllBlogPosts = () => {
	const posts = getSlugs()
		.map((slug) => getPostFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) return 1;
			if (a.meta.date < b.meta.date) return -1;

			return 0;
		})
		.reverse();

	return posts;
};
