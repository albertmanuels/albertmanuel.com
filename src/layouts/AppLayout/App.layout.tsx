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
          <main className="grid sm:grid-cols-6 px-4 md:px-0 md:w-[72rem] mx-auto bg-white dark:bg-zinc-900 pt-10 min-h-mobile md:min-h-desktop">
            <section className="w-full mb-10 sm:mb-0 sm:col-span-2">
              <ProfileSection />
            </section>

            <section className="w-full sm:col-span-4 sm:pl-6">
              {children}
            </section>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
