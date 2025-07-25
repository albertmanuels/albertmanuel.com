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
  const { title, publishedOn, slug, description } = metadata;

  return (
    <Link href={`/blogs/${slug}`}>
      <div className="w-full bg-transparent shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-md text-gray-400">{formatDate(publishedOn)}</p>
        <p className="text-md text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default PostCard;
