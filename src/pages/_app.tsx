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
			</Head>

			<ThemeProvider enableSystem={false} attribute="class">
				<div className={poppins.className}>
					<Component {...pageProps} />
				</div>
			</ThemeProvider>
		</>
	);
}
