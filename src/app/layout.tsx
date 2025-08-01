import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COLOR_THEME_COOKIE } from "@/constants/global";

const workSans = Work_Sans({
	variable: "--font-work-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Albert Manuel | Software Engineer",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const savedTheme = (await cookies()).get(COLOR_THEME_COOKIE);
	const theme = savedTheme?.value || "light";

	return (
		<html lang="en" data-color-theme={theme}>
			<body className={`${workSans.variable} antialiased`}>
				<Header initialTheme={theme} />
				<main className="min-h-svh max-w-3xl mx-auto px-4 pt-20">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
