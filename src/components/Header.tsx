"use client";
import Cookie from "js-cookie";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COLOR_THEME_COOKIE } from "@/constants/global";
import navigationLinks from "@/constants/navigation";
import { cn } from "@/helpers/utils";

type Props = {
  initialTheme: string;
};

const Header = ({ initialTheme }: Props) => {
  const [theme, setTheme] = useState(initialTheme);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.screenY > 50) {
      setIsScrolled(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    Cookie.set(COLOR_THEME_COOKIE, newTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    root.setAttribute("data-color-theme", newTheme);
  };

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-10 isolate transition-colors duration-300 w-full lg:px-0 px-4"
      )}
    >
      <div
        className={cn(
          "max-w-3xl mx-auto p-4 rounded-lg mt-4",
          isScrolled
            ? "backdrop-blur-lg bg-white/20 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            albertmanuel
          </Link>
          <div className="flex items-center gap-4">
            <ul className="flex space-x-4">
              {navigationLinks.map((nav) => (
                <li key={nav.url}>
                  <Link href={nav.url}>{nav.title}</Link>
                </li>
              ))}
            </ul>
            <button onClick={handleToggleTheme}>
              {theme === "light" ? (
                <Moon className="size-6" />
              ) : (
                <Sun className="size-6" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
