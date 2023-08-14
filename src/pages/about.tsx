import React from "react";
import TemplateLayout from "../templates/Layout";
import Image from "next/image";
import ProfileImg from "@/src/assets/albertmanuel.jpg";
import Link from "next/link";
import {
	SiBootstrap,
	SiGit,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

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
];

const AboutPage = () => {
	return (
		<TemplateLayout
			pageTitle="About"
			description="Albert is a Frontend Engineer working with React ecosystems to build a cool stuff in a web platform"
		>
			<section className="layout">
				<main className="layout flex flex-col-reverse items-start justify-center sm:flex-row sm:items-center sm:justify-start">
					<div className="w-full sm:w-3/5 sm:mr-6">
						<article className="mb-6">
							<h1 className="text-primary-200 dark:text-txt-200 text-2xl sm:text-4xl font-semibold mb-4">
								About
							</h1>
							<h1 className="text-accent text-2xl sm:text-4xl font-semibold mb-3 fade-in">
								Albert Manuel Simbolon
							</h1>

							<p className="text-primary-200 dark:text-txt-200 font-light leading-relaxed mb-3">
								Hi, I&apos;m Albert. Very interested learn about Web Ecosystems,
								especially Frontend Development to build a cool stuff that can
								be interacted with users.
							</p>
							<p className="text-primary-200 dark:text-txt-200 font-light leading-relaxed mb-3">
								I have been working as Frontend Engineer for 2 years in tech
								industry and experienced working with remote environment and
								keep my communication-collaboration smooth. Outside of my work,
								I love to watch a movie, explore some place, and reading a book.
							</p>
							<p className="text-primary-200 dark:text-txt-200 font-light leading-relaxed mb-5">
								Currently I learn how to write a
								<Link href="/blog" className="text-accent">
									&nbsp;blogs
								</Link>{" "}
								to share my thoughts, knowledge and things that I have learned.
							</p>
							<h3 className="text-primary-200 dark:text-txt-200 text-lg font-medium mb-4">
								Experienced and familiar with these technologies:
							</h3>
							<figure>
								<div className="flex flex-wrap gap-3 sm:gap-4">
									{stacks.map((tech) => (
										<tech.icon
											key={tech.id}
											className="w-10 h-10 fill-primary-100 dark:fill-txt-200"
										/>
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
							placeholder="blur"
						/>
					</div>
				</main>
			</section>
		</TemplateLayout>
	);
};
export default AboutPage;
