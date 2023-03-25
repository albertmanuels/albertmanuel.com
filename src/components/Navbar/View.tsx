import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="w-full bg-zinc-900">
			<div className="w-full max-w-5xl flex flex-row justify-between items-center mx-auto h-20">
				<div>
					<Link href="/">
						<h1 className="text-cyan-500 font-bold">Albert Manuel</h1>
					</Link>
				</div>
				<ul className="flex flex-row list-style-none m-0 p-0">
					<li className="mr-4 ">
						<Link href="/projects" className="text-cyan-500 font-bold">
							Projects
						</Link>
					</li>
					<li className="mr-4">
						<Link href="/about" className="text-cyan-500 font-bold">
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
