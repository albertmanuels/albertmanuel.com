
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

interface PostMeta {
  slug: string;
  publishedOn: string;
  title: string;
  description: string;
  tags?: string[];
}

export async function getBlogPosts() {
  const fileNames = await readDirectory('/src/content');

  const blogPosts: PostMeta[] = [];

  for(const fileName of fileNames) {
    const rawContent = await readFile(`/src/content/${fileName}`);

    const {data: frontmatter} = matter(rawContent) as unknown as { data: Omit<PostMeta, 'slug'> };

    blogPosts.push({
      ...frontmatter,
      slug: fileName.replace(".mdx", ''),
    })

  }
    return blogPosts.sort((p1, p2) => {
      return p1.publishedOn < p2.publishedOn ? 1 : -1
    })
}

export const loadBlogPost = cache(async function loadBlogPost(slug: string) {
  const rawContent = await readFile(`/src/content/${slug}.mdx`);

  const {data: frontmatter, content} = matter(rawContent);

  const inferedFrontmatter = frontmatter as PostMeta;
  
  return { frontmatter: inferedFrontmatter, content}
})  

function readFile(localPath: string) {
  return fs.readFile(
    path.join(process.cwd(), localPath), "utf-8"
  )
}

function readDirectory(localPath: string) {
  return fs.readdir(
    path.join(process.cwd(), localPath),
  )
}