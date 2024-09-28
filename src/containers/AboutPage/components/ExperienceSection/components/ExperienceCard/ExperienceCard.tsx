import React from "react";

type ExperienceCardProps = {
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  company: string;
  isRightSided?: boolean;
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const {
    position,
    startDate,
    endDate,
    description,
    company,
    isRightSided = false,
  } = props;

  return (
    <div
      className={`flex flex-col  py-2 relative border-dashed text-primary-200 dark:text-white ${
        isRightSided
          ? "w-experienceRightSided self-end border-l-blue-600 border-l-4 pl-4"
          : "w-experienceLeftSided self-start border-r-blue-600 border-r-4 pr-4"
      } `}
    >
      <h2 className="text-xl font-bold text-blue-600 md:text-2xl">{company}</h2>
      <h3 className="text-lg font-semibold md:text-xl">{position}</h3>
      <p>
        {startDate} - {endDate}
      </p>
      <ul>
        {description.map((desc: string) => (
          <li key={desc} className="">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
