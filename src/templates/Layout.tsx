import Navbar from "@/components/Navbar";
import Head from "next/head";
import React, { ReactNode } from "react";

const TemplateLayout = ({
	children,
	pageTitle,
}: {
	children: ReactNode;
	pageTitle: string;
}) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<Navbar />
			<main className="w-full bg-zinc-900 h-[calc(100vh-70px)]">
				<section className="w-full max-w-5xl bg-transparent h-auto mx-auto">
					{children}
				</section>
			</main>
		</>
	);
};

export default TemplateLayout;
