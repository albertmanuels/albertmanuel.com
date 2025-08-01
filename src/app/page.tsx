import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { socials } from "@/constants/global";
import { getBlogPosts } from "@/helpers/file-helpers";

export default async function Home() {
	const posts = await getBlogPosts();

	return (
		<div className="pt-12">
			<section className="mb-10">
				<h1 className="!text-5xl mb-4 !font-bold">
					Hi there, I&rsquo;m Albert Manuel
				</h1>
				<p>
					I&rsquo;m a software engineer, working with{" "}
					<span className="bg-amber-300 text-black px-1 font-medium">
						Javascript
					</span>{" "}
					and all-things-web.
				</p>
				<div className="flex items-center gap-2">
					<span>Let&rsquo;s connect: </span>
					<Link href={socials.LINKEDIN}>
						<LinkedinIcon />
					</Link>
					<Link href={socials.GITHUB}>
						<GithubIcon />
					</Link>
				</div>
			</section>
			<section>
				<h2 className="text-3xl font-semibold !mb-10">Latest writings</h2>
				<ul className="flex flex-col gap-6">
					{posts.slice(0, 3).map(({ slug, ...delegated }) => (
						<PostCard key={slug} metadata={{ slug, ...delegated }} />
					))}
				</ul>
			</section>
		</div>
	);
}
