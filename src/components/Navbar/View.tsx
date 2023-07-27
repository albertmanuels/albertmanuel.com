import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useView } from "./View.hooks";

const Navbar = () => {
	const { isScroll } = useView();
	const { asPath } = useRouter();

	const pageLink = [
		{
			name: "Blog",
			path: "/blog",
		},
	];

	return (
		<header
			className={`w-full fixed top-0 overflow-hidden px-4 lg:px-0 bg-zinc-900 z-10`}
		>
			<nav>
				<div
					className={`w-full layout flex flex-row justify-between items-center mx-auto h-20  ${
						isScroll
							? "border-b-accent border-b-2"
							: "border-transparent border-b-2"
					}`}
				>
					<div>
						<Link href="/" className="text-accent font-semibold">
							AMS
						</Link>
					</div>
					<ul className="flex flex-row list-style-none m-0 p-0">
						{pageLink.map((page, idx) => (
							<li
								key={idx}
								className={`
                ${
									asPath.includes(page.path)
										? "border border-x-0 border-t-0 border-b-2 border-b-accent pb-[2px]"
										: "text-gray-50"
								} 
                ${idx !== pageLink.length - 1 ? "mr-5" : "mr-0"}
                font-medium
                `}
							>
								<Link href={page.path}>{page.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
