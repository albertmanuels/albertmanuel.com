import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
	const { asPath } = useRouter();

	const pageLink = [
		{
			name: "Projects",
			path: "/projects",
		},
	];

	return (
		<header className="w-full fixed top-0 overflow-hidden px-4 lg:px-0 bg-zinc-900">
			<nav>
				<div className="w-full max-w-5xl flex flex-row justify-between items-center mx-auto h-20">
					<div>
						<Link href="/" className="text-cyan-500 font-bold">
							Albert Manuel
						</Link>
					</div>
					<ul className="flex flex-row list-style-none m-0 p-0">
						{pageLink.map((page, idx) => (
							<li
								key={idx}
								className={`
                ${asPath === page.path ? "text-cyan-500" : "text-gray-50"} 
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
