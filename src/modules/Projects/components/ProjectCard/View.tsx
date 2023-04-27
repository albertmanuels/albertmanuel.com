import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "./View.types";

const ProjectCard = ({
	thumbnail,
	title,
	desc,
	stacks,
	link,
}: ProjectCardProps) => {
	return (
		<li className="project-card rounded-lg border border-gray-400 flex flex-col w-full overflow-hidden">
			<div className="tag-stack w-full"></div>
			<div className="w-full mb-5">
				<Image src={thumbnail} alt="thumbnail" />
			</div>
			<div className="px-4 pb-4">
				<section className="mb-4">
					<h3 className="text-xl text-gray-50 font-medium mb-4">{title}</h3>
					<p>{desc}</p>
				</section>

				<Link
					href={link}
					target="_blank"
					className="hover:text-cyan-500 hover:transition-all"
				>
					Visit live site &rarr;
				</Link>
			</div>
		</li>
	);
};

export default ProjectCard;
