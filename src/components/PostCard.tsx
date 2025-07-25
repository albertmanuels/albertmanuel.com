import Link from "next/link";
import React from "react";

type Props = {
  metadata: {
    title: string;
    date: string;
    slug: string;
  };
};

const PostCard = (props: Props) => {
  const { metadata } = props;
  const { title, date, slug } = metadata;

  return (
    <Link href={`/blogs/${slug}`}>
      <div className="w-full p-4 bg-transparent shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
