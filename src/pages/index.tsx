import TemplateLayout from "@/src/templates/Layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ProfileImg from "@/src/assets/albertmanuel.jpg";
import Link from "next/link";

const HomePage = () => {
	return (
		<TemplateLayout pageTitle="Albert Manuel">
			<section>
				<main className="layout flex justify-center items-center">
					<div className="mb-6">
						<h1 className="text-accent text-2xl sm:text-4xl font-semibold">
							Hi, I&apos;m Albert Manuel
						</h1>
						<h3 className="text-lg font-semibold text-txt-300 mb-2">
							Software Engineer from Indonesia🇮🇩
						</h3>

						<p className="mb-4 font-light">
							I work with React ecosystem to build a cool stuff in web platform
						</p>
						<Link
							href="/about"
							className="font-light p-2 bg-primary-200 rounded-sm"
						>
							More about me
						</Link>
					</div>
				</main>
			</section>
		</TemplateLayout>
	);
};

export default HomePage;
