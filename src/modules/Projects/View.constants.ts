import pokepediaImg from "../../assets/pokepedia.png";
import rpsGameImg from "../../assets/rps-game.png";
import aikrutImg from "../../assets/aikrut.png";
import skillanaImg from "../../assets/skillana.png";

export const PROJECT_LIST = [
	{
		title: "Pokepedia",
		thumbnail: pokepediaImg,
		stacks: ["react", "javascript", "graphql", "emotion"],
		description:
			"A simple game to catch pokemon monsters. All of pokemon card are clickable to show the detail information of the pokemon itself. In detail page there is Button to catch and require to give a name for your pokemom, in case you can catched it. Instead, you can also try again to catch if you fail.",
		link: "https://pokepedia-albertmanuels.vercel.app",
	},
	{
		title: "Rock Paper Scissors",
		thumbnail: rpsGameImg,
		stacks: ["html", "css", "javascript"],
		description: "Adopted local game",
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
