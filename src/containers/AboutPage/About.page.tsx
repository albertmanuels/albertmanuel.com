import { experiences } from "@/src/constants";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section>
      <h1 className="mb-3 text-5xl font-semibold text-primary-200 dark:text-txt-300">
        About
      </h1>
      <hr className="mb-8" />
      <div className="flex flex-col mb-8 md:mb-16 md:justify-between md:flex-row gap-x-10">
        <div className="mx-auto mb-8 md:mb-0 md:w-[40%]">
          <Image
            src="/images/albert.jpeg"
            width={220}
            height={220}
            className="rounded-full w-[180px] h-[180px] md:w-[220px] md:h-[220px] border-[1px] border-primary-300 dark:border-transparent"
            alt="Albert Manuel"
            loading="lazy"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="mb-10">
          <p className="mb-5 text-lg text-primary-100 dark:text-txt-100">
            Hi there! I&rsquo;m Albert Manuel Simbolon. With over 3 years of
            experience in web development, I have been gaining my skills on both
            technical and non-technical. I love to
          </p>

          {/* Education background */}
          <p className="mb-5 text-lg text-primary-100 dark:text-txt-100">
            Without a formal IT background,
          </p>

          {/* Purpose of this web */}
          <p className="text-lg text-primary-100 dark:text-txt-100">
            In this website,
          </p>
        </div>
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
            {/* <ul className="text-lg list-disc">
              {expericence.responsibilities.map((item, idx) => (
                <li key={`${idx}-${item}`}>{item}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
