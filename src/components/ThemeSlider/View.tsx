"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSlider = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <label className="relative inline-block w-[50px] height-[20px]">
      <input
        type="checkbox"
        className="w-0 h-0 opacity-0 toggle"
        checked={theme === "light" ? true : false}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <span
        aria-hidden="true"
        className="slider bg-accent rounded-[24px] before:rounded-[24px] absolute cursor-pointer top-0 left-0 right-0 bottom-0 before:absolute before:contens-none before:w-[15px] before:h-[15px] before:left-[5px] before:bottom-[3px] before:bg-white before:transition-all before:delay-[0.1s] delay-[0.1s]"
      />
    </label>
  );
};

export default ThemeSlider;
