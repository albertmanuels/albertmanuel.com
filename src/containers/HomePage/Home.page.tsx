import { LINKED_URL } from "@/src/constants";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center layout">
      <main className="flex items-center justify-center">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-accent sm:text-4xl">
            Hi, I&apos;m Albert Manuel
          </h1>
          <h3 className="mb-2 text-lg font-medium text-primary-200 dark:text-txt-300">
            Software Engineer🇮🇩
          </h3>
          <Link
            href="/about"
            className="inline-block mb-2 font-light p-2 dark:bg-primary-200 text-primary-200 dark:text-txt-200 border-dashed border-[1px] border-primary-200"
          >
            More about me
          </Link>
          <div className="flex flex-row items-center gap-x-4">
            <Link
              href="https://drive.google.com/file/d/1aBs4OLcwYmV52SQL26Df7_mJZ8_tl6hZ/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Link>
            <Link href={LINKED_URL}>Linkedin</Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
