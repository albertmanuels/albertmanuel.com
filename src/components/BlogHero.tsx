import { formatDate } from "@/helpers/utils";
import BadgeCollection from "./BadgeCollection";

type Props = {
  title: string;
  description: string;
  publishedOn: string;
  tags?: string[];
};

const BlogHero = (props: Props) => {
  const { title, description, publishedOn, tags } = props;

  return (
    <div className="border-b border-gray-500 mb-8 pb-8">
      {tags && <BadgeCollection tags={tags} />}
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
      <span className="text-sm">Published on {formatDate(publishedOn)}</span>
    </div>
  );
};

export default BlogHero;
