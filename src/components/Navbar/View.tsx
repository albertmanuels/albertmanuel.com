import Link from "next/link";
import { useRouter } from "next/router";
import { useView } from "./View.hooks";
import { PAGE_LIST } from "./View.constants";

const Navbar = () => {
	const { asPath } = useRouter();
	const { isScroll } = useView();

	return (
		<header
			className={`w-full fixed top-0 overflow-hidden px-4 lg:px-0 bg-zinc-900 z-10`}
		>
			<nav>
				<div
					className={`w-full layout flex flex-row justify-between items-center mx-auto h-20  `}
				>
					<div>
						<Link href="/" className="text-lg text-accent font-semibold">
							AMS
						</Link>
					</div>
					<ul className="flex flex-row list-style-none m-0 p-0">
						{PAGE_LIST.map((page, idx) => (
							<li
								key={idx}
								className={`
                ${
									asPath.includes(page.path)
										? "border border-x-0 border-t-0 border-b-2 border-b-accent pb-[2px]"
										: "border border-x-0 border-t-0 border-b-2 border-b-transparent pb-[2px] text-gray-50 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-2 hover:border-b-accent hover:pb-[2px] hover:delay-150"
								} 
                ${idx !== PAGE_LIST.length - 1 ? "mr-5" : "mr-0"}
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
