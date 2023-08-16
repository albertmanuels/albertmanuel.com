import TemplateLayout from "@/src/templates/Layout";
import Link from "next/link";

const HomePage = () => {
	return (
		<TemplateLayout
			pageTitle="Albert Manuel"
			description="Hi, I'm Albert Manuel. I work with React ecosystems to build a cool stuff in a web platform"
		>
			<section className="layout justify-center flex items-center">
				<main className="flex justify-center items-center">
					<div className="mb-6">
						<h1 className="text-accent text-2xl sm:text-4xl font-semibold">
							Hi, I&apos;m Albert Manuel
						</h1>
						<h3 className="text-lg font-medium text-primary-200 dark:text-txt-300 mb-2">
							Software Engineer🇮🇩
						</h3>
						<p className="text-primary-200 dark:text-txt-200 mb-4 font-light">
							I work with React ecosystem to build a cool stuff in a web
							platform
						</p>
						<Link
							href="/about"
							className="font-light p-2 dark:bg-primary-200 text-primary-200 dark:text-txt-200 border-dashed border-[1px] border-primary-200"
						>
							More about me
						</Link>
					</div>
				</main>
			</section>
		</TemplateLayout>
	);
};

export default HomePage;
