import { formatDate } from "@/helpers/utils";
import React from "react";

type Props = {
  title: string;
  description: string;
  publishedOn: string;
  tags?: string[];
};

const BlogHero = (props: Props) => {
  const { title, description, publishedOn, tags } = props;

  return (
    <div className="border-b border-gray-500 mb-8 pb-4">
      {tags && (
        <div className="mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-400 rounded-sm p-1 text-xs font-semibold text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
      <span className="text-sm">Published on {formatDate(publishedOn)}</span>
    </div>
  );
};

export default BlogHero;
