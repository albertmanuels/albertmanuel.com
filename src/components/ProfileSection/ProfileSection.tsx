import React from "react";
import CloudinaryImage from "../CloudinaryImage";
import Link from "next/link";
import { GITHUB_URL, LINKEDIN_URL } from "@/src/constants";
import { SiGithub, SiGooglemaps, SiLinkedin } from "react-icons/si";
import { RiGraduationCapFill } from "react-icons/ri";

const ProfileSection = () => {
  return (
    <div className="relative h-[100vh] md:h-full text-primary-200 dark:text-white min-h-inherit">
      <div className="sticky top-[70px] flex flex-col items-center">
        <CloudinaryImage
          className="w-1/2 mx-auto mb-5 rounded-full md:w-3/4"
          publicId="albertmanuel.com/assets/bkwzaooasm4biupaqkaw"
          width={600}
          height={(600 * 3) / 3}
          aspect={{ width: 3, height: 3 }}
          alt="profile pict"
          mdx={false}
        />
        <div>
          <h1 className="text-2xl font-semibold text-center sm:text-3xl text-primary-200 dark:text-white">
            Albert Manuel Simbolon
          </h1>
          <p className="mb-4 text-lg font-light text-center sm:text-xl">
            Software Engineer
          </p>
          <hr />
          <div className="flex flex-col gap-2 mt-4 mb-10">
            <p className="flex items-center font-light text-md sm:text-lg gap-x-2">
              <SiGooglemaps className="w-4 h-4 sm:w-6 sm:h-6 fill-primary-100 dark:fill-txt-200" />
              Jakarta, Indonesia
            </p>
            <p className="flex items-start font-light text-md sm:text-lg gap-x-2">
              <RiGraduationCapFill className="w-5 h-5 sm:w-7 sm:h-7 fill-primary-100 dark:fill-txt-200" />
              Bachelor of Engineering, Telkom University
            </p>
            <ul className="flex flex-col gap-y-2">
              <li className="w-max">
                <Link
                  href={LINKEDIN_URL}
                  className="flex items-center font-light text-md sm:text-lg gap-x-2"
                >
                  <SiLinkedin className="w-4 h-4 sm:w-6 sm:h-6 fill-primary-100 dark:fill-txt-200" />
                  LinkedIn
                </Link>
              </li>
              <li className="w-max">
                <Link
                  href={GITHUB_URL}
                  className="flex items-center font-light text-md sm:text-lg gap-x-2"
                >
                  <SiGithub className="w-4 h-4 sm:w-6 sm:h-6 fill-primary-100 dark:fill-txt-200" />
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className="inline-block w-full py-2 text-lg font-medium text-center text-white border-2 border-blue-800 rounded-md bg-zinc-900"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
