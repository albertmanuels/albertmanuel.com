"use client";
import Link from "next/link";
import { PAGE_LIST } from "./View.constants";
import ThemeButton from "../ThemeButton/View";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === path;
    } else {
      return pathname.startsWith(path);
    }
  };

  return (
    <header
      className={`w-full sticky top-0 px-6 lg:px-0 bg-white dark:bg-darkMode z-10`}
    >
      <nav className="w-full max-w-[64rem] flex flex-row justify-end md:justify-between items-center mx-auto h-24">
        <Link
          href="/"
          className="flex items-center hidden gap-3 text-2xl font-semibold md:block text-darkMode dark:text-white"
        >
          Albert Manuel
        </Link>
        <div className="flex flex-row items-center gap-10">
          <ul className="flex flex-row gap-6 p-0 m-0 md:gap-10 list-style-none">
            {PAGE_LIST.map((page, idx) => (
              <li
                key={idx}
                className={`text-md md:text-lg font-medium
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
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
