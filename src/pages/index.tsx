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
				<article className="layout min-h-mobile sm:min-h-desktop flex flex-col-reverse items-start justify-center sm:flex-row sm:items-center sm:justify-start">
					<div className="w-full sm:w-3/5 sm:mr-6">
						<div className="mb-6">
							<h1 className="text-accent text-2xl sm:text-4xl font-semibold">
								Hi, I&apos;m Albert Manuel Simbolon
							</h1>
							<h3 className="text-lg font-semibold text-txt-300 mb-4">
								Software Engineer from Indonesia🇮🇩
							</h3>
							<h3 className="text-txt-200">
								Self-taught programmer majored in Telecommunication Engineering
								and discovered programming while in college. Very interested
								learn about Web Ecosystems. I have been working as Frontend
								Engineer for 2 years. When i&apos;m not open my text editor i
								love to spending time with my friends, grab a cup of coffee and
								enjoyed a movie.
							</h3>
						</div>

						<div className="w-full">
							<Link
								href="mailto:albertmanuels10@gmail.com"
								className="block mx-auto sm:mx-0 w-max"
							>
								<button className="transition rounded-md px-4 py-2 bg-accent hover:bg-transparent hover:delay-100 hover border border-transparent hover:border-cyan-600 hover:border-solid hover:border hover:text-cyan-500">
									<FontAwesomeIcon icon={faEnvelope} size="lg" /> Email me
								</button>
							</Link>
						</div>
					</div>

					<div className="w-full mb-8 mt-1 sm:mt-0 sm:w-2/5">
						<Image
							className="rounded-full mx-auto border-accent border-[3px]"
							src={ProfileImg}
							width={400}
							height={400}
							style={{ objectFit: "contain" }}
							priority
							alt="profile"
						/>
					</div>
				</article>
			</section>
		</TemplateLayout>
	);
};

export default HomePage;
