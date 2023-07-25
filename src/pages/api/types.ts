export interface PostMeta {
	title: string;
	date: string;
	tags: string[];
	description: string;
	slug: string;
}

export interface Post {
	meta: PostMeta;
	content: string;
}
