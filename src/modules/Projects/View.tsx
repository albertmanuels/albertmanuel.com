import ProjectCard from "./components/ProjectCard";
import pokepediaImg from "../../assets/pokepedia.png";
import rpsGameImg from "../../assets/rps-game.png";
import aikrutImg from "../../assets/aikrut.png";
import skillanaImg from "../../assets/skillana.png";

const Projects = () => {
	const projectList = [
		{
			title: "Pokepedia",
			thumbnail: pokepediaImg,
			stacks: ["react", "javascript", "graphql", "emotion"],
			description: "...",
			link: "https://pokepedia-albertmanuels.vercel.app",
		},
		{
			title: "Rock Paper Scissors",
			thumbnail: rpsGameImg,
			stacks: ["html", "css", "javascript"],
			description: "...",
			link: "https://rps-game-albert.netlify.app",
		},
		{
			title: "Aikrut Landing Page",
			thumbnail: aikrutImg,
			stacks: ["react", "javascript", "bootstrap", "scss"],
			description: "...",
			link: "https://aikrut.id",
		},
		{
			title: "Skillana Landing Page",
			thumbnail: skillanaImg,
			stacks: ["react", "javascript", "bootstrap", "scss"],
			description: "...",
			link: "https://skillana.id",
		},
	];

	return (
		<section className="layout min-h-mobile sm:min-h-desktop">
			<h1 className="text-2xl font-bold">Projects</h1>
			<ul className="w-full grid gap-6 sm:grid-cols-2 xl:grid-cols-3 flex-wrap mt-8">
				{projectList.map((project, idx) => (
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
