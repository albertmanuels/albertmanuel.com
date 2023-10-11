import path, { join } from "path";
import { promises, readFileSync } from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import type { BlogFrontmatter, ContentType, PickFrontmatter } from "./types";
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";

const POSTS_PATH = path.join(process.cwd(), "src/contents", "/blog");

export const getSlugs = () => {
	const paths = sync(`${POSTS_PATH}/*.mdx`);

	return paths.map((path) => {
		const parts = path.split("/");
		const fileName = parts[parts.length - 1] || "";
		const [slug, _ext] = fileName.split(".");

		return slug;
	});
};

export const getAllFilesFrontmatter = async <T extends ContentType>(
	type: T
) => {
	const files = await getFileList(join(process.cwd(), "src", "contents", type));

	if (files) {
		return files.reduce((allPosts: PickFrontmatter[], absolutePath) => {
			const source = readFileSync(absolutePath, "utf-8");
			const { data } = matter(source);

			const result = [
				{
					...(data as BlogFrontmatter),
					slug: absolutePath
						.replace(join(process.cwd(), "src", "contents", type) + "/", "")
						.replace(".mdx", ""),
				},
				...allPosts,
			];

			return result;
		}, []);
	} else {
		return [];
	}
};

export const getFileList = async (dirName: string) => {
	let files: string[] = [];
	const items = await promises.readdir(dirName, { withFileTypes: true });

	for (const item of items) {
		if (item.isDirectory()) {
			files = [...files, ...(await getFileList(`${dirName}/${item.name}`))];
		} else {
			files.push(`${dirName}/${item.name}`);
		}
	}
	return files;
};

export const getPostData = async (slug: string) => {
	const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);

	const mdxSource = readFileSync(fullPath, "utf8");

	const { code, frontmatter } = await bundleMDX({
		source: mdxSource,
		mdxOptions(options) {
			options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
			options.rehypePlugins = [
				...(options?.rehypePlugins ?? []),
				rehypeSlug,
				[rehypePrettyCode, { theme: "one-dark-pro" }],
				[
					rehypeAutolinkHeadings,
					{
						properties: {
							className: ["has-anchor"],
						},
					},
				],
			];

			return options;
		},
	});

	return {
		slug,
		frontmatter,
		code,
	};
};

export default getPostData;
