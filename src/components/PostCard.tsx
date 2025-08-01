import Link from "next/link";
import { formatDate } from "@/helpers/utils";
import BadgeCollection from "./BadgeCollection";

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

  const postTitle = title.length > 50 ? title.substring(0, 50) + "..." : title;
  const postDescription =
    description.length > 70
      ? description.substring(0, 70) + "..."
      : description;

  return (
    <Link href={`/blogs/${slug}`}>
      <div className="w-full bg-transparent shadow-md hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg">
        {tags && <BadgeCollection tags={tags} />}
        <h2 className="text-xl font-semibold">{postTitle}</h2>
        <p className="text-gray-400">{formatDate(publishedOn)}</p>
        <p className=" text-gray-600">{postDescription}</p>
      </div>
    </Link>
  );
};

export default PostCard;
