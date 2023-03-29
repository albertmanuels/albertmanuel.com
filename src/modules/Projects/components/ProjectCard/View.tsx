import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "./View.types";
import { STACK_LABEL } from "./View.constants";
import { cx } from "@emotion/css";

const ProjectCard = ({
	thumbnail,
	title,
	desc,
	stacks,
	link,
}: ProjectCardProps) => {
	return (
		<li className="project-card rounded-lg border border-gray-400 flex flex-col w-full overflow-hidden p-4">
			{/* <div className="tag-stack w-full">
				{stacks.map((stack, idx) => (
					<span key={idx} className={cx("rounded-sm text-sm mr-1")}>
						{stack}
					</span>
				))}
			</div> */}
			<div className="w-full mb-5">
				<Image src={thumbnail} alt="thumbnail" className="rounded-lg" />
			</div>
			<div>
				<section className="mb-4">
					<h3 className="text-xl text-gray-50 font-medium">{title}</h3>
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
