import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { PostMeta } from "../pages/api/types";

export interface MDXPostProps {
	source: MDXRemoteSerializeResult<string, unknown>;
	meta: PostMeta;
}
