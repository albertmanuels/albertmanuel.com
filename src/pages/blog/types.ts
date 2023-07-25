import { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { PostMeta } from "../api/types";

export interface MDXPostProps {
	source: MDXRemoteSerializeResult<string, unknown>;
	meta: PostMeta;
}
