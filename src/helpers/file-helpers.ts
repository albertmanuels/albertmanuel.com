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

type GetContentFilesParams = {
	contentDir: string;
}

export async function getContentFiles({contentDir}: GetContentFilesParams) {
	try {
		const fileNames = await readDirectory(contentDir);

		const contents: PostMeta[] = [];

		const dir = contentDir.endsWith("/") ? contentDir : `${contentDir}/`;

		for (const fileName of fileNames) {
			const rawContent = await readFile(`${dir}${fileName}`);

			const { data: frontmatter } = matter(rawContent) as unknown as {
				data: Omit<PostMeta, "slug">;
			};

			const extension = fileName.endsWith(".mdx") ? ".mdx" : ".md";

			contents.push({
				...frontmatter,
				slug: fileName.replace(extension, ""),
			});
		}

		return contents
			.filter((content) => content.published)
			.sort((p1, p2) => {
				return p1.publishedOn < p2.publishedOn ? 1 : -1;
			});
	} catch (error) {
		console.error("Error loading contents:", error);
		return [];
	}
}

type GetContentDetailParams = {
	slug: string;
	contentDir: string;
}

export const getContentDetail = cache(async function getContentDetail({ slug, contentDir }: GetContentDetailParams) {
	const dir = contentDir.endsWith("/") ? contentDir : `${contentDir}/`;
	const filePath = await resolveMarkdownFile(dir, slug);
	if(!filePath) return null;

	try {
		const rawContent = await readFile(filePath);
		const { data: frontmatter, content } = matter(rawContent);
		const inferedFrontmatter = frontmatter as PostMeta;

		if (!inferedFrontmatter.published) return null;

		return { frontmatter: inferedFrontmatter, content };
	} catch (error) {
		console.error(`Failed to load content detail for: ${slug}`, error);
		throw new Error(`Content not found`);
	}
})

async function resolveMarkdownFile(dir: string, slug: string ): Promise<string | null> {
	const mdxPath = `${dir}${slug}.mdx`;
	const mdPath = `${dir}${slug}.md`;

	try {
		await fs.access(path.join(process.cwd(), mdxPath));
		return mdxPath;
	} catch (error) {
		console.error(`Failed to read MDX file: ${mdxPath}`, error);
	}

	try {
		await fs.access(path.join(process.cwd(), mdPath));
		return mdPath;
	} catch (error) {
		console.error(`Failed to read MD file: ${mdPath}`, error);
	}

	return null;
}

function readFile(localPath: string) {
	return fs.readFile(path.join(process.cwd(), localPath), "utf-8");
}

function readDirectory(localPath: string) {
	return fs.readdir(path.join(process.cwd(), localPath));
}
