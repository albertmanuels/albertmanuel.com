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
          <p className="mb-4 font-light text-primary-200 dark:text-txt-200">
            I work with React ecosystem to build cool stuff in web platform
          </p>
          <Link
            href="/about"
            className="font-light p-2 dark:bg-primary-200 text-primary-200 dark:text-txt-200 border-dashed border-[1px] border-primary-200"
          >
            More about me
          </Link>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
