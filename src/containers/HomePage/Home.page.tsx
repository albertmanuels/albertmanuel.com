import Link from "next/link";
import React from "react";
import { stacks } from "./Home.constants";

const HomePage = () => {
  return (
    <article className="flex flex-col gap-5">
      <div className="w-full min-h-[12vh]">
        <h1 className="text-4xl font-bold text-primary-200 dark:text-white">
          Hi!
        </h1>
        <h1 className="mb-2 text-4xl font-bold text-primary-200 dark:text-white">
          You can call me{" "}
          <span className="border-b-2 border-dotted border-accent text-primary-200 dark:text-white">
            Albert
          </span>
        </h1>
        <p className="mb-4 text-lg text-primary-200 dark:text-white">
          I&rsquo;m a Software Engineer who loves to creating a cool stuff thru
          coding and learn new things as much as possible.
        </p>
        <h3 className="mb-4 text-lg font-medium text-primary-200 dark:text-txt-200">
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
        </figure>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-primary-200 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
          <Link href="/" className="inline-block w-full">
            <div className="border rounded-lg border-[1px] w-full border-zinc-900 dark:border-slate-200 min-h-[12vh] max-h-[15vh] px-4 py-3 text-primary-200 dark:text-white">
              <h4>Pokepedia</h4>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HomePage;
