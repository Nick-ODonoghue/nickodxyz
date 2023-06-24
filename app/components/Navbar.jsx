"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const navLinks = {
		projects: ".projects()",
		about: ".about()",
		tools: ".tools()",
		contact: ".contact()",
		resume: ".resume()",
	};
	const title = "NickOD.xyz";

	const currentPath = usePathname();
	console.log(currentPath);

	return (
		<>
			<header className=" py-6 mb-12 text-slate-700 px-3">
				<div>
					<Link href={"#top"}>
						<h1 className=" text-2xl font-semibold">{title}</h1>
					</Link>
				</div>
			</header>
			<nav className=" container fixed bottom-5 px-3 ">
				<div className="bg-slate-800 text-white rounded-full flex justify-center gap-10 px-10 py-4 max-w-fit mx-auto">
					{Object.entries(navLinks).map(([key, value]) => {
						return (
							<Link key={value} href={`#${key}`} className=" group font-medium hover:text-purple-500">
								{value}
								<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
								{console.log(key)}
							</Link>
						);
					})}
				</div>
			</nav>
		</>
	);
}
