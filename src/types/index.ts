import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { BlogFrontmatter } from "../pages/api/types";

export interface MDXPostProps {
	source: MDXRemoteSerializeResult<string, unknown>;
	meta: BlogFrontmatter;
}
