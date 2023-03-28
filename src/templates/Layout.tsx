import Footer from "@/components/Footer";
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
			<main className="px-4 lg:px-0 mt-20">{children}</main>
			<Footer />
		</>
	);
};

export default TemplateLayout;
