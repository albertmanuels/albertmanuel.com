"use client";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      className="group border border-[1px] border-txt-200 hover:border-subAccent p-2 rounded-md"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MdDarkMode className="w-6 h-6 group-hover:fill-subAccent fill-primary-200" />
      ) : (
        <MdLightMode className="w-6 h-6 group-hover:fill-subAccent" />
      )}
    </button>
  );
};

export default ThemeButton;
