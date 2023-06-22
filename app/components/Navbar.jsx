import Link from "next/link";

export default function Navbar() {
	const navLinks = {
		projects: ".projects()",
		about: ".about()",
		tools: ".tools()",
		contact: ".contact()",
		resume: ".resume()",
	};
	const title = "NickOD.xyz";

	return (
		<header className=" flex justify-between items-center py-6 mb-12 text-slate-700">
			<div>
				<Link href={"#top"}>
					<h1 className=" text-2xl font-semibold">{title}</h1>
				</Link>
			</div>
			<nav className=" flex gap-10">
				{Object.entries(navLinks).map(([key, value]) => {
					return (
						<Link key={value} href={`#${key}`} className=" group font-medium hover:text-purple-500">
							{value}
							<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
						</Link>
					);
				})}
			</nav>
		</header>
	);
}
