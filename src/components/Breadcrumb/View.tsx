import { MDXPostProps } from "@/src/types";
import Link from "next/link";

const Breadcrumb = ({ post }: { post: MDXPostProps }) => {
	return (
		<div className="flex flex-row mb-3 text-txt-100">
			/&nbsp;
			<Link href={`/blog`}>blog</Link>
			&nbsp; / &nbsp;
			<Link href={`/${post.meta.slug}`} className="text-txt-300">
				{post.meta.title}
			</Link>
		</div>
	);
};

export default Breadcrumb;
