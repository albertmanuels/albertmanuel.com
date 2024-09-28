"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import * as runtime from "react/jsx-runtime";
import CloudinaryImage from "../CloudinaryImage";

type MDXContentProps = {
  code: string;
};

const getMDXComponent = (code: string) => {
  const fn = new Function(code);

  console.log(fn({ ...runtime }).default);

  return fn({ ...runtime }).default;
};

const mdxComponents = {
  Image,
  CloudinaryImage,
};

const MDXContent = ({ code }: MDXContentProps) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component components={mdxComponents} />;
};

export default MDXContent;
