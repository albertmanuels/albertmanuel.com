import { BrightProps, Code } from "bright";
import React from "react";
import theme from "./theme";

const CodeSnippet = (props: BrightProps) => {
	return <Code {...props} theme={theme} codeClassName="rounded-md" />;
};

export default CodeSnippet;
