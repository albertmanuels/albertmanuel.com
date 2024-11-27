import { experiences } from "@/src/constants";
import Image from "next/image";
import React from "react";
import { techStacks } from "./About.constants";

const AboutPage = () => {
  return (
    <section>
      <h1 className="mb-3 text-5xl font-semibold text-primary-200 dark:text-txt-300">
        About
      </h1>
      <hr className="mb-8" />
      <div className="flex flex-col w-full mb-8 md:mb-10 md:flex-row gap-x-10">
        <div className="mx-auto mb-8 md:mx-0 md:mb-0">
          <Image
            src="/images/albert.png"
            width={220}
            height={220}
            className="rounded-full w-[180px] md:w-[220px] h-auto border-[1px] border-primary-300 dark:border-transparent"
            alt="Albert Manuel"
            loading="lazy"
            style={{
              objectFit: "cover",
              aspectRatio: 3 / 3,
            }}
          />
        </div>
        <div className="mb-10 w-[40vw] mt-10">
          <p className="mb-5 text-lg text-primary-100 dark:text-txt-100">
            Hi there! I&rsquo;m Albert, a Software Engineer working with
            JavaScript in the web ecosystem.
          </p>

          <p className="mb-5 text-lg text-primary-100 dark:text-txt-100">
            In early 2019, I had my first experience in learning web
            development, where I took a free course on web programming
            fundamental taught by Dicoding Indonesia. It was fun and challenging
            to learn new things that weren't quite aligned with my major (fun
            fact: I'm not a computer science or IT student). I really enjoyed my
            time and learned a lot about HTML, CSS and programming with
            JavaScript. Since then, I have been continued my learning journey
            through online courses, YouTube videos, articles and have explored
            more about web development, especially front-end development.
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
            On this website, I've started writing blog articles as part of my
            learning journey, and I hope others find them helpful too.
          </p>
        </div>
      </div>
      <div className="w-full md:mb-20">
        <h3 className="mb-8 text-3xl font-bold border-b-2 text-primary-200 dark:text-txt-300 w-max border-b-subAccent">
          Tech stack that I familiar
        </h3>

        <ol className="flex flex-row gap-3">
          {techStacks.map((tech, idx) => {
            const Icon = tech;

            return (
              <li key={idx}>
                <Icon size="30px" />
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        <h3 className="mb-8 text-3xl font-bold border-b-2 text-primary-200 dark:text-txt-300 w-max border-b-subAccent">
          Work Experiences
        </h3>
        {experiences.map((expericence) => (
          <div
            key={expericence.company}
            className="mb-8 dark:text-txt-200 text-primary-200"
          >
            <h4 className="text-xl font-semibold text-subAccent">
              {expericence.title}
            </h4>
            <p className="text-lg">{expericence.company}</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-md">
              {expericence.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
