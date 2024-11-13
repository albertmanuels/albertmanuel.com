import Link from "next/link";
import React from "react";
import { stacks } from "./Home.constants";

const HomePage = () => {
  return (
    <article className="flex flex-col gap-5 pt-16">
      <div className="w-full min-h-[12vh]">
        <h1 className="text-5xl font-bold text-primary-200 dark:text-white">
          Hi!
        </h1>
        <h1 className="mb-4 text-5xl font-bold text-primary-200 dark:text-white">
          You can call me{" "}
          <span className="border-b-2 border-dotted border-accent text-primary-200 dark:text-white">
            Albert
          </span>
        </h1>
        <p className="w-full mb-5 text-xl text-primary-200 dark:text-txt-100 md:w-3/5">
          I&rsquo;m a Software Engineer, currently working with{" "}
          <span className="text-subAccent">React Ecosystem</span> and{" "}
          <span className="text-subAccent">TypeScript</span> as my go-to tools
          to solves problems and build quality products.
        </p>

        <div className="flex items-center gap-4 mb-14">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 border rounded-md border-primary-100 dark:border-transparent text-primary-200 dark:text-txt-100 bg-subAccent"
          >
            Resume
          </Link>
          <Link
            href="/about"
            className="inline-block px-4 py-2 border rounded-md border-primary-100 dark:border-accent text-primary-200 dark:text-txt-100"
          >
            Learn more about me
          </Link>
        </div>

        {/* <h3 className="mb-4 text-lg font-medium text-primary-200 dark:text-txt-200">
          Experienced and familiar with these technologies:
        </h3>
        <figure>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {stacks.map((tech) => (
              <tech.icon
                key={tech.id}
                className="w-10 h-10 fill-primary-100 dark:fill-txt-200"
              />
            ))}
          </div>
        </figure> */}
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="mb-3 text-xl font-semibold text-primary-200 dark:text-white ">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="delay-100 text-primary-200 dark:text-txt-200 hover:dark:text-txt-300 hover:delay-100"
          >
            Show more
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          <Link href="/" className="inline-block w-full">
            <div className="border rounded-lg border-[1px] w-full border-zinc-900 dark:border-slate-200 min-h-[12vh] max-h-[15vh] px-4 py-3 text-primary-200 dark:text-white">
              <h4>Pokepedia</h4>
            </div>
          </Link>
          <Link href="/" className="inline-block w-full">
            <div className="border rounded-lg border-[1px] w-full border-zinc-900 dark:border-slate-200 min-h-[12vh] max-h-[15vh] px-4 py-3 text-primary-200 dark:text-white">
              <h4>Pokepedia</h4>
            </div>
          </Link>
          <Link href="/" className="inline-block w-full">
            <div className="border rounded-lg border-[1px] w-full border-zinc-900 dark:border-slate-200 min-h-[12vh] max-h-[15vh] px-4 py-3 text-primary-200 dark:text-white">
              <h4>Pokepedia</h4>
            </div>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="mb-3 text-xl font-semibold text-primary-200 dark:text-white">
            Featured Blogs
          </h2>
          <Link
            href="/blog"
            className="delay-100 text-primary-200 dark:text-txt-200 hover:dark:text-txt-300 hover:delay-100"
          >
            Show more
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          <Link href="/" className="inline-block w-full">
            <div className="border rounded-lg border-[1px] w-full border-zinc-900 dark:border-slate-200 min-h-[12vh] max-h-[15vh] px-4 py-3 text-primary-200 dark:text-white">
              <h4>Blog 1</h4>
            </div>
          </Link>
          <Link href="/" className="inline-block w-full">
            <div className="border rounded-lg border-[1px] w-full border-zinc-900 dark:border-slate-200 min-h-[12vh] max-h-[15vh] px-4 py-3 text-primary-200 dark:text-white">
              <h4>Blog 2</h4>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HomePage;
