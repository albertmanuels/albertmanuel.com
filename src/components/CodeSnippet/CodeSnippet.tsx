import { Code, BrightProps } from "bright";
import React from "react";
import theme from "./theme";

const CodeSnippet = (props: BrightProps) => {
  return (
    <div className="rounded-lg border border-gray-300 px-4 bg-gray-50 dark:bg-gray-800 my-5">
      <Code {...props} theme={theme} />
    </div>
  );
};

export default CodeSnippet;
