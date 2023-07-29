import { StaticImageData } from "next/image";

export interface ProjectCardProps {
	title: string;
	description: string;
	thumbnail: StaticImageData;
	url: string;
	technologies: string[];
}
