import { StaticImageData } from "next/image";

export interface ProjectCardProps {
	thumbnail: StaticImageData;
	title: string;
	desc: string;
	stacks: string[];
	link: string;
}
