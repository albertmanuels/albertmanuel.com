import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { GITHUB_URL, LINKED_URL } from "@/src/constants";

const Footer = () => {
	return (
		<footer className="px-4 lg:px-0 mt-12 sm:mt-12 pb-5 w-full bottom-0">
			<main className="layout flex flex-col-reverse xs:flex-row items-center justify-center border-t pt-4">
				<p className="xs:mr-5">&copy; 2023. All Rights Reserved.</p>
				<div className="flex flex-row">
					<h4 className="mr-3">Get in touch</h4>
					<div>
						<Link href={GITHUB_URL} className="mr-4">
							<FontAwesomeIcon
								icon={faGithub}
								className="text-white"
								size="xl"
							/>
						</Link>
						<Link href={LINKED_URL}>
							<FontAwesomeIcon
								icon={faLinkedin}
								className="text-white"
								size="xl"
							/>
						</Link>
					</div>
				</div>
			</main>
		</footer>
	);
};

export default Footer;
