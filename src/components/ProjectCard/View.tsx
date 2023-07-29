import React from "react";
import { ProjectCardProps } from "./View.types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
	return (
		<div className="flex flex-col xl:flex-row gap-3 border rounded-md border-1 h-full w-full p-3">
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
				<p className="text-txt-200 text-md text-light mb-3">
					{project.description}
				</p>
				<Link
					href={project.url}
					className="text-md text-medium text-txt-200 hover:text-accent mb-2"
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
