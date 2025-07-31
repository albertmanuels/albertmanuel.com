import { formatDate } from "@/helpers/utils";
import Link from "next/link";
import React from "react";

type Props = {
  metadata: {
    title: string;
    publishedOn: string;
    slug: string;
    description: string;
    tags?: string[];
  };
};

const PostCard = (props: Props) => {
  const { metadata } = props;
  const { title, publishedOn, slug, description, tags } = metadata;

  return (
    <Link href={`/blogs/${slug}`}>
      <div className="w-full bg-transparent shadow-md hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg">
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
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400">{formatDate(publishedOn)}</p>
        <p className=" text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default PostCard;
