"use client";
import Link from "next/link";
import { PAGE_LIST } from "./View.constants";
import ThemeSlider from "../ThemeSlider/View";
import { usePathname } from "next/navigation";
import LabsDarkIcon from "public/icons/labs-circle-dark.svg";
import LabsLightIcon from "public/icons/labs-circle-light.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === path;
    } else {
      return pathname.startsWith(path);
    }
  };

  return (
    <header
      className={`w-full sticky top-0 px-4 lg:px-0 bg-white dark:bg-darkMode z-10`}
    >
      <nav className="w-full max-w-[72rem] flex flex-row justify-between items-center mx-auto h-24">
        <div>
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-semibold text-darkMode dark:text-white"
          >
            <Image
              src={isDarkMode ? LabsLightIcon : LabsDarkIcon}
              width={55}
              height={55}
              alt="LabsIcon"
              className="hover:rotate-[30deg] hover:transition-transform hover:delay-200 delay-200 transition-transform"
            />
            Albertlabs
          </Link>
        </div>
        <div className="flex flex-row items-center gap-5">
          <ul className="flex flex-row gap-6 p-0 m-0 md:gap-10 list-style-none">
            {PAGE_LIST.map((page, idx) => (
              <li
                key={idx}
                className={`text-lg font-semibold
                ${
                  isActivePath(page.path)
                    ? "border border-x-0 border-t-0 border-b-2 border-b-accent pb-[2px] text-primary-200 dark:text-txt-300"
                    : "border border-x-0 border-t-0 border-b-2 border-b-transparent pb-[2px] text-primary-200 dark:text-txt-300"
                } 
                font-medium
                `}
              >
                <Link href={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
          <ThemeSlider />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
