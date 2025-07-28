import { Code, BrightProps } from "bright";
import React from "react";
import theme from "./theme";

const CodeSnippet = (props: BrightProps) => {
  return (
    <Code
      {...props}
      theme={theme}
      codeClassName="bg-gray-300 dark:bg-gray-800 p-4 rounded-md"
    />
  );
};

export default CodeSnippet;
