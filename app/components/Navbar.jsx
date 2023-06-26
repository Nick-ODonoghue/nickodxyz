import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { path: "#projects", name: ".projects()" },
    { path: "#about", name: ".about()" },
    { path: "#tools", name: ".tools()" },
    { path: "#contact", name: ".contact()" },
    // { path: "#resume", name: ".resume()" },
  ];
  const title = "NickOD.xyz";

  return (
    <>
      <header className=" py-6 px-3 fixed z-20 bg-white/95 min-w-full">
        {/* <div> */}
        <Link href={"#top"} className=" text-4xl font-semibold">
          {title}
        </Link>
        {/* </div> */}
      </header>
      <nav className=" container fixed bottom-5 px-3 z-50 ">
        <div className="bg-purple-300 text-slate-800 rounded-full flex justify-center gap-6 px-10 py-4 max-w-fit mx-auto">
          {navLinks.map((link) => {
            return (
              <Link key={link.name} href={link.path} className=" group font-semibold">
                {link.name}
                <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-800"></span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const navLinks = [
//     { path: "/#projects", name: ".projects()" },
//     { path: "/#about", name: ".about()" },
//     { path: "/#tools", name: ".tools()" },
//     { path: "/#contact", name: ".contact()" },
//     { path: "/#resume", name: ".resume()" },
//   ];
//   const title = "NickOD.xyz";

//   const currentPath = usePathname();

//   return (
//     <>
//       <header className=" py-6 mb-24 px-3">
//         <div>
//           <Link href={"#top"}>
//             <h1 className=" text-4xl font-semibold">{title}</h1>
//           </Link>
//         </div>
//       </header>
//       <nav className=" container fixed bottom-5 px-3 ">
//         <div className="bg-slate-300 text-slate-800 rounded-full flex justify-center gap-10 px-10 py-4 max-w-fit mx-auto">
//           {navLinks.map((link) => {
//             return (
//               <Link
//                 key={link.name}
//                 href={link.path}
//                 className={currentPath === link.path ? "text-red-500 " : " group font-semibold hover:text-purple-500"}
//               >
//                 {link.name}
//                 <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </>
//   );
// }
