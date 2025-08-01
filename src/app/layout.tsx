import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Albert Manuel | Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-color-theme="dark">
      <body className={`${workSans.variable} antialiased`}>
        <Header />
        <main className="min-h-svh max-w-3xl mx-auto px-4 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
