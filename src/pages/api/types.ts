export interface PostMeta {
	title: string;
	date: string;
	tags: string[];
	description: string;
	slug: string;
	banner: string;
	thumbnail: string;
}

export interface Post {
	meta: PostMeta;
	content: string;
}
