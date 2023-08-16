import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { GITHUB_URL, LINKED_URL } from "@/src/constants";

const Footer = () => {
	return (
		<footer className="w-full bg-white dark:bg-zinc-900 flex flex-col-reverse xs:flex-row items-center justify-center px-4 lg:px-0 py-5 text-primary-200 dark:text-txt-300">
			<p className="xs:mr-5">&copy; 2023. All Rights Reserved.</p>
			<div className="flex flex-row">
				<h4 className="mr-3">Get in touch</h4>
				<div>
					<Link href={GITHUB_URL} className="mr-4">
						<FontAwesomeIcon
							icon={faGithub}
							className="text-primary-200 dark:text-white"
							size="xl"
						/>
					</Link>
					<Link href={LINKED_URL}>
						<FontAwesomeIcon
							icon={faLinkedin}
							className="text-primary-200 dark:text-white"
							size="xl"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
