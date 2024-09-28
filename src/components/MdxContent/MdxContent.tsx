"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import * as runtime from "react/jsx-runtime";

const getMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};
type MDXContentProps = {
  code: string;
};

const mdxComponents = {
  Image,
};

const MDXContent = ({ code }: MDXContentProps) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component components={mdxComponents} />;
};

export default MDXContent;
