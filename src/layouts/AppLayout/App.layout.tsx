"use client";
import { ThemeProvider } from "next-themes";
import "@/src/styles/globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ProfileSection from "@/src/components/ProfileSection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-zinc-900">
        <ThemeProvider
          enableSystem={false}
          defaultTheme="dark"
          attribute="class"
        >
          <Navbar />
          <main className="grid grid-cols-6 mt-20 w-[72rem] mx-auto pt-8 bg-white dark:bg-zinc-900">
            <section className="col-span-2">
              <ProfileSection />
            </section>

            <section className="w-full col-span-4 pl-6">{children}</section>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
