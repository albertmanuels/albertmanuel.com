import React from "react";
import { experiences } from "./ExperienceSection.constants";
import ExperienceCard from "./components/ExperienceCard";

const ExperienceSection = () => {
  const renderExperience = () => {
    return experiences.map((exp, idx) => {
      return idx % 2 === 0 ? (
        <ExperienceCard key={idx} {...exp} />
      ) : (
        <ExperienceCard key={idx} {...exp} isRightSided />
      );
    });
  };
  return (
    <section className="flex flex-col items-center">
      <h1 className="mb-6 text-4xl font-semibold text-primary-200 dark:text-white">
        Work Experiences
      </h1>
      <div className="flex flex-col justify-start w-full md:w-[35vw]">
        {renderExperience()}
      </div>
    </section>
  );
};

export default ExperienceSection;
