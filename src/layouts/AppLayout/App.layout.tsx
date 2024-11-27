"use client";
import { ThemeProvider } from "next-themes";
import "@/src/styles/globals.css";
import "@/src/styles/mdx.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-white dark:bg-darkMode">
        <ThemeProvider
          enableSystem={false}
          defaultTheme="dark"
          attribute="class"
        >
          <Navbar />
          <main className="px-6 lg:px-0 md:max-w-[64rem] mx-auto bg-white dark:bg-darkMode pt-10 min-h-mobile md:min-h-desktop">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
