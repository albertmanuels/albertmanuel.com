import Link from "next/link";

const Navbar = () => {
	return (
		<header className="w-full fixed top-0 overflow-hidden px-4 lg:px-0  ">
			<nav className="bg-zinc-900">
				<div className="w-full max-w-5xl flex flex-row justify-between items-center mx-auto h-20">
					<div>
						<Link href="/">
							<h1 className="text-cyan-500 font-bold">Albert Manuel</h1>
						</Link>
					</div>
					<ul className="flex flex-row list-style-none m-0 p-0">
						<li className="mr-4 ">
							<Link href="/projects" className="text-cyan-500">
								Projects
							</Link>
						</li>
						<li>
							<Link href="/blog" className="text-cyan-500">
								Blog
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
