import React from "react";
import TemplateLayout from "@/src/templates/Layout";
import { PROJECTS } from "../constants";
import ProjectCard from "../components/ProjectCard/View";

const ProjectsPage = () => {
	return (
		<TemplateLayout pageTitle="Projects">
			<section className="layout min-h-mobile sm:min-h-desktop pt-[24px]">
				<h4 className="text-txt-200 text-md font-medium mb-5">
					So, these are list of my work both professional and personal project.
				</h4>
				<ul className="flex flex-col gap-4">
					{PROJECTS.map((project, idx) => (
						<li key={idx}>
							<ProjectCard project={project} />
						</li>
					))}
				</ul>
			</section>
		</TemplateLayout>
	);
};

export default ProjectsPage;
