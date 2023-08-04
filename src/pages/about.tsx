import React from "react";
import TemplateLayout from "../templates/Layout";
import Image from "next/image";
import ProfileImg from "@/src/assets/albertmanuel.jpg";
import Link from "next/link";
import {
	SiBootstrap,
	SiFigma,
	SiGit,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

export default function AboutPage() {
	return (
		<TemplateLayout pageTitle="About">
			<section className="layout">
				<main className="layout flex flex-col-reverse items-start justify-center sm:flex-row sm:items-center sm:justify-start">
					<div className="w-full sm:w-3/5 sm:mr-6">
						<article className="mb-6">
							<h1 className="text-2xl sm:text-4xl font-semibold mb-4">About</h1>
							<h1 className="text-accent text-2xl sm:text-4xl font-semibold mb-3 fade-in">
								Albert Manuel Simbolon
							</h1>

							<p className="text-txt-200 font-light leading-relaxed mb-3">
								Hi, I&apos;m Albert. I started learn web development when I was
								Engineering student at Telkom University. Very interested learn
								about Web Ecosystems, especially Frontend Development to build a
								cool stuff that can be interacted with users.
							</p>
							<p className="text-txt-200 font-light leading-relaxed mb-3">
								I have been working as Frontend Engineer for 2+ years in various
								industry including E-commerce, Startup, and Software House.
								Also, I have experience working with remote environment and keep
								my communication-collaboration smooth and finish my task.
								<br />
								Outside of my work, I love to watch a movie, cafe hopping,
								explore some place, and reading a book.
							</p>
							<p className="text-txt-200 font-light leading-relaxed mb-5">
								Currently I learn how to write a
								<Link href="/blog" className="text-accent">
									&nbsp;blogs
								</Link>{" "}
								to share my knowledge and things that i have learned.
							</p>

							<h3 className="text-xl font-medium mb-4">
								Experienced and familiar with these technologies and tools:
							</h3>
							<figure>
								<div className="flex flex-wrap gap-3 sm:gap-4">
									{stacks.map((tech) => (
										<tech.icon key={tech.id} className="w-10 h-10" />
									))}
								</div>
							</figure>
						</article>
					</div>

					<div className="w-full mb-8 mt-1 sm:mt-0 sm:w-2/5">
						<Image
							className="rounded-full mx-auto border-accent border-[3px]"
							src={ProfileImg}
							width={280}
							height={280}
							style={{ objectFit: "contain" }}
							priority
							alt="profile"
						/>
					</div>
				</main>
			</section>
		</TemplateLayout>
	);
}

const stacks = [
	{
		id: "nextjs",
		icon: SiNextdotjs,
	},
	{
		id: "react",
		icon: SiReact,
	},
	{
		id: "typescript",
		icon: SiTypescript,
	},
	{
		id: "javascript",
		icon: SiJavascript,
	},
	{
		id: "nodejs",
		icon: SiNodedotjs,
	},
	{
		id: "tailwind",
		icon: SiTailwindcss,
	},
	{
		id: "bootstrap",
		icon: SiBootstrap,
	},
	{
		id: "sass",
		icon: SiSass,
	},
	{
		id: "git",
		icon: SiGit,
	},
	{
		id: "figma",
		icon: SiFigma,
	},
];
