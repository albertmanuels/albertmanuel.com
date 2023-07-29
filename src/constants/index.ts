import AikrutImg from "@/src/assets/aikrut-thumbnail.png";
import SkillanaImg from "@/src/assets/skillana-thumbnail.png";
import PokepediaImg from "@/src/assets/pokepedia.png";
import RPSImg from "@/src/assets/rps-thumbnail.png";
import TodolistImg from "@/src/assets/todolist-thumbnail.png";
import PersonalWebImg from "@/src/assets/personal-web-thumbnail.png";

export const GITHUB_URL = "https://github.com/albertmanuels";
export const LINKED_URL = "https://www.linkedin.com/in/albertmanuels/";

export const PROJECTS = [
	{
		title: "Aikrut Landing Page",
		description:
			"I handle this project when I work at Widya Skilloka. Actually, since join as Frontend Engineer I already take several time responsibility to update the design and this is the last update of that.",
		thumbnail: AikrutImg,
		url: "https://aikrut.id/",
		technologies: ["React, Javascript, Bootstrap, CSS, SASS"],
	},
	{
		title: "Skillana Landing Page",
		description: "",
		thumbnail: SkillanaImg,
		url: "https://skillana.id/",
		technologies: ["React, Javascript, CSS, SASS"],
	},
	{
		title: "My Personal Website",
		description: "",
		url: "https://www.albertmanuel.com/",
		thumbnail: PersonalWebImg,
		technologies: ["NextJs, Typescript, Tailwind CSS, MDX, CSS"],
	},
	{
		title: "Pokepedia",
		description: "",
		thumbnail: PokepediaImg,
		url: "https://pokepedia-albertmanuels.vercel.app/",
		technologies: [
			"React, Javascript, Emotion CSS, Apollo GraphQL, Context, Lottie",
		],
	},
	{
		title: "Todo List",
		description: "",
		thumbnail: TodolistImg,
		url: "https://albertmanuel-todo-devrank.netlify.app/",
		technologies: ["React, Typescript, Emotion CSS, RESTful"],
	},
	// {
	// 	title: "Rock Paper Scissors",
	// 	description: "This is my project when I work at Widya Skilloka",
	// 	thumbnail: RPSImg,
	// 	url: "https://rps-game-albert.netlify.app/",
	// 	technologies: ["HTML, CSS, Javascript, Netlify"],
	// },
];
