import "@/src/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/src/styles/mdx.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="I work with React ecosystems to build a cool stuff in web platform"
				/>
				<meta property="og:url" content="https://www.albertmanuel.com" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Albert Manuel" />
				<meta
					property="og:description"
					content="I work with React ecosystems to build a cool stuff in web platform"
				/>
				<meta property="og:image" content="" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="albertmanuel.com" />
				<meta property="twitter:url" content="https://www.albertmanuel.com" />
				<meta name="twitter:title" content="Albert Manuel" />
				<meta
					name="twitter:description"
					content="I work with React ecosystems to build a cool stuff in web platform"
				/>
				<meta name="twitter:image" content="" />
			</Head>

			<ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
				<div className={poppins.className}>
					<Component {...pageProps} />
				</div>
			</ThemeProvider>
		</>
	);
}
