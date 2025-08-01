import React from "react";
import Badge from "./Badge";

type Props = {
  tags: string[];
};

const BadgeCollection = ({ tags }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {tags
        .sort((a, b) => a.localeCompare(b))
        .map((tag) => (
          <Badge key={tag} tag={tag} />
        ))}
    </div>
  );
};

export default BadgeCollection;
