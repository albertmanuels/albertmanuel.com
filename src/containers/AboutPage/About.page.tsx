import { experiences } from "@/src/constants";
import Image from "next/image";
import React from "react";
import { socialMedia, techStacks } from "./About.constants";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section>
      <h1 className="mb-3 text-5xl font-semibold text-primary-200 dark:text-txt-300">
        About
      </h1>
      <hr className="mb-8" />
      <div className="flex flex-col w-full mt-8 mb-8 md:mt-20 md:mb-10 md:flex-row gap-x-10">
        <div className="flex flex-col mx-auto mb-8 md:mx-0 md:mb-0">
          <div className="mb-4 md:mb-5">
            <Image
              id="avatar"
              src="/images/albert.jpeg"
              width={220}
              height={220}
              className="rounded-full w-[180px] md:w-[220px] h-auto dark:border-transparent"
              alt="Albert Manuel"
              loading="lazy"
              style={{
                objectFit: "cover",
                aspectRatio: 3 / 3,
              }}
            />
          </div>
          <p className="mx-auto mb-3 text-lg dark:text-txt-200 text-primary-200">
            Let&rsquo;s connect! 🎉
          </p>
          <ol className="flex flex-row gap-3 mx-auto">
            {socialMedia.map((item, idx) => {
              const Icon = item.icon;

              return (
                <li key={idx}>
                  <Link href={item.link} target="_blank">
                    <Icon
                      size="24px"
                      className="dark:text-txt-200 text-primary-200"
                    />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="mb-10 w-full w-min-[42vw] md:max-w-[58vw]">
          <p className="mb-5 text-lg text-primary-100 dark:text-txt-100">
            Hi there! I&rsquo;m Albert, a Software Engineer working with
            JavaScript in web ecosystem.
          </p>

          <p className="mb-5 text-lg text-primary-100 dark:text-txt-100">
            In early 2019, I had my first experience learning web development,
            where I took a course on web programming fundamental taught by
            Dicoding Indonesia. It was fun and challenging to learn new things
            that weren&rsquo;t quite aligned with my major (fun fact: I&rsquo;m
            not a computer science or IT student). I really enjoyed my time and
            learned a lot about HTML, CSS and programming with JavaScript. Since
            then, I have been continued my learning journey through online
            courses, YouTube videos, articles and have explored more about web
            development, especially front-end development.
          </p>
          <p className="mb-5 text-lg text-primary-100 dark:text-txt-100">
            Currently, I am working as a{" "}
            <span className="text-subAccent">Frontend Engineer</span> at an IT
            consulting company in Indonesia. This is my first Full-time
            experience working on client-based consulting, where I build
            web-based internal tools for Enterprise. My work involves from
            creating and maintaining reusable components, redefining folder
            structures, conducting code reviews, and fixing bugs. Besides that,
            I also{" "}
            <span className="text-subAccent">
              Lead the frontend development team
            </span>{" "}
            on project, where my contributions include managing and prioritizing
            tasks, defining requirements for future development, handling
            deployment and work closely with the manager and stakeholders. Wow,
            this is my first experience leading a team! I still have a lot to
            learn in order to become a better leader in the future.
          </p>
          <p className="mb-5 text-lg text-primary-100 dark:text-txt-100">
            On this website, I&rsquo;ve started writing blog articles as part of
            my learning journey, and I hope others find them helpful too.
          </p>
          <div className="w-full mb-5">
            <p className="mb-8 text-lg text-primary-200 dark:text-txt-300">
              Tech stack that I familiar
            </p>
            <ol className="flex flex-row flex-wrap gap-3">
              {techStacks.map((tech, idx) => {
                const Icon = tech;

                return (
                  <li key={idx}>
                    <Icon
                      size="30px"
                      className="dark:text-txt-200 text-primary-200"
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
