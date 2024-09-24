"use client";
import React from "react";
import { ProjectCardProps } from "./View.types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
  return (
    <div className="flex flex-col w-full h-full gap-3 p-3 border rounded-md xl:flex-row border-1">
      <div className="thumbnail">
        <Link href={project.url} target="_blank">
          <Image
            className="w-full rounded-md"
            src={project.thumbnail}
            width={300}
            height={200}
            style={{ objectFit: "cover", aspectRatio: 16 / 9 }}
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="relative w-full">
        <h3 className="text-lg font-medium text-txt-300">{project.title}</h3>
        <p className="mb-3 text-txt-200 text-md text-light">
          {project.description}
        </p>
        <Link
          href={project.url}
          className="mb-2 text-md text-medium text-txt-200 hover:text-accent"
          target="_blank"
        >
          Live Site
        </Link>
        <div className="flex flex-row items-center text-light text-md text-txt-200">
          <p>Technologies: </p>&nbsp;
          {project.technologies.map((tech, idx) => (
            <p key={idx}>{tech}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
