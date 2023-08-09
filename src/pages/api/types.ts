export interface BlogFrontmatter {
	title: string;
	date: string;
	tags: string[];
	description: string;
	slug: string;
	banner: string;
	thumbnail: string;
}

export interface BlogType {
	code: string;
	frontmatter: BlogFrontmatter;
}

export type ContentType = "blog";
export type PickFrontmatter = BlogFrontmatter;
