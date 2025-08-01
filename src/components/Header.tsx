"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import navigationLinks from "@/constants/navigation";
import { cn } from "@/helpers/utils";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		if (window.screenY > 50) {
			setIsScrolled(true);
		}

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 right-0 left-0 z-10 isolate transition-colors duration-300 w-full",
				isScrolled
					? "backdrop-blur-lg bg-white/20 shadow-sm"
					: "bg-transparent",
			)}
		>
			<div className={cn("max-w-3xl mx-auto py-4 px-4")}>
				<nav className="flex justify-between">
					<Link href="/" className="text-xl font-bold">
						albertmanuel
					</Link>
					<ul className="flex space-x-4">
						{navigationLinks.map((nav) => (
							<li key={nav.url}>
								<Link href={nav.url}>{nav.title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
