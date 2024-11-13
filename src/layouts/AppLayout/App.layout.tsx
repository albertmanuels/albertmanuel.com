"use client";
import { ThemeProvider } from "next-themes";
import "@/src/styles/globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-darkMode">
        <ThemeProvider
          enableSystem={false}
          defaultTheme="dark"
          attribute="class"
        >
          <Navbar />
          <main className="px-4 md:px-0 md:w-[72rem] mx-auto bg-white dark:bg-darkMode pt-10 min-h-mobile md:min-h-desktop">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
