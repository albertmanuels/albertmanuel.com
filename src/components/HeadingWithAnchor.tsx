import React, { JSX, PropsWithChildren } from "react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

type Props = PropsWithChildren<{ as: keyof JSX.IntrinsicElements }>;

const HeadingWithAnchor = ({ as: Tag, children }: Props) => {
  const id = typeof children === "string" ? slugify(children) : undefined;

  return (
    <Tag id={id} tabIndex={-1} className="group scroll-mt-24">
      {children}
      {id && (
        <a
          href={`#${id}`}
          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary"
          aria-label="Anchor link"
        >
          #
        </a>
      )}
    </Tag>
  );
};

export default HeadingWithAnchor;
