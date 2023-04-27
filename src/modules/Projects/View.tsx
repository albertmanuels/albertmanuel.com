import { PROJECT_LIST } from "./View.constants";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
	return (
		<section className="layout min-h-mobile sm:min-h-desktop">
			<h1 className="text-2xl font-bold">Projects</h1>
			<ul className="w-full grid gap-6 sm:grid-cols-2 3xl:grid-cols-3 flex-wrap mt-8">
				{PROJECT_LIST.map((project, idx) => (
					<ProjectCard
						key={idx}
						thumbnail={project.thumbnail}
						title={project.title}
						stacks={project.stacks}
						desc={project.description}
						link={project.link}
					/>
				))}
			</ul>
		</section>
	);
};

export default Projects;
