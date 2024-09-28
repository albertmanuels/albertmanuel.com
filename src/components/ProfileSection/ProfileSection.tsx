import React from "react";
import CloudinaryImage from "../CloudinaryImage";
import Link from "next/link";
import { GITHUB_URL, LINKEDIN_URL } from "@/src/constants";
import { SiGithub, SiGooglemaps, SiLinkedin } from "react-icons/si";
import { RiGraduationCapFill } from "react-icons/ri";

const ProfileSection = () => {
  return (
    <div className="relative flex-col items-center px-2 text-primary-200 md:min-h-desktop min-h-mobile dark:text-white">
      <div className="sticky top-[70px]">
        <CloudinaryImage
          className="w-3/4 mx-auto mb-5 rounded-full"
          publicId="albertmanuel.com/assets/bkwzaooasm4biupaqkaw"
          width={600}
          height={(600 * 3) / 3}
          aspect={{ width: 3, height: 3 }}
          alt="profile pict"
          mdx={false}
        />
        <div>
          <h1 className="text-3xl font-semibold text-center text-primary-200 dark:text-white">
            Albert Manuel Simbolon
          </h1>
          <p className="mb-4 text-xl font-light text-center">
            Software Engineer
          </p>
          <hr />
          <div className="flex flex-col gap-2 mt-4 mb-10">
            <p className="flex items-center text-lg font-light gap-x-2">
              <SiGooglemaps className="w-6 h-6 fill-primary-100 dark:fill-txt-200" />
              Jakarta, Indonesia
            </p>
            <p className="flex items-start text-lg font-light gap-x-2">
              <RiGraduationCapFill className="w-7 h-7 fill-primary-100 dark:fill-txt-200" />
              Bachelor of Engineering, Telkom University
            </p>
            <ul className="flex flex-col gap-y-2">
              <li className="w-max">
                <Link
                  href={LINKEDIN_URL}
                  className="flex items-center text-lg font-light gap-x-2"
                >
                  <SiLinkedin className="w-6 h-6 fill-primary-100 dark:fill-txt-200" />
                  LinkedIn
                </Link>
              </li>
              <li className="w-max">
                <Link
                  href={GITHUB_URL}
                  className="flex items-center text-lg font-light gap-x-2"
                >
                  <SiGithub className="w-6 h-6 fill-primary-100 dark:fill-txt-200" />
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className="inline-block w-full py-2 text-lg font-medium text-center text-white border-2 border-blue-800 rounded-md bg-zinc-900"
            href="https://drive.google.com/file/d/1aBs4OLcwYmV52SQL26Df7_mJZ8_tl6hZ/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
