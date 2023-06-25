import Link from "next/link";
import Image from "next/image";
import AllofYou from "/public/AllofYou.jpg";
import EveryBiteCounts from "/public/EveryBiteCounts.jpg";
import FootySportsNews from "/public/Footy-Sports-News.jpg";

export default function ProjectCard() {
  const portfolioData = [
    {
      image: AllofYou,
      title: "All of You",
      description:
        "A space for artists to share who they are and the work they make, and for opportunity makers to find the artists they need",
      techStack: ["html", "css", "bootstrap", "javascript", "ruby", "ruby on rails", "heroku"],
      siteLinks: [
        {
          label: "Live Site",
          url: "https://www.allofyou.art/",
        },
        {
          label: "Github",
          url: "https://github.com/nikstojkov/AllofYou",
        },
      ],
    },
    {
      image: EveryBiteCounts,
      title: "Every Byte Counts",
      description:
        "A space for artists to share who they are and the work they make, and for opportunity makers to find the artists they need",
      techStack: ["html", "css", "bootstrap", "javascript", "ruby", "ruby on rails", "heroku"],
      siteLinks: [
        {
          label: "Live Site",
          url: "",
        },
        {
          label: "Github",
          url: "https://github.com/nikstojkov/AllofYou",
        },
      ],
    },
    {
      image: FootySportsNews,
      title: "Footy Sports News",
      description:
        "A space for artists to share who they are and the work they make, and for opportunity makers to find the artists they need",
      techStack: ["html", "css", "javascript", "node.js", "express", "heroku"],
      siteLinks: [
        {
          label: "Live Site",
          url: "https://footy-sports-news.herokuapp.com/",
        },
        {
          label: "Github",
          url: "https://github.com/Nick-ODonoghue/footy-sports-news",
        },
      ],
    },
  ];

  return (
    <div>
      {portfolioData.map((card) => (
        <div key={card.title} className="shadow-lg p-4 rounded-lg max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-md group mb-2">
            <Image src={card.image} alt={card.title} />
            <div className="absolute h-full w-full bg-black/90 flex items-center justify-center bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-md px-2">
              <p className="text-white font-medium text-center">{card.description}</p>
            </div>
          </div>
          <h2 className="text-2xl font-medium mb-4">{card.title}</h2>
          <p className="text-lg text-slate-600 mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {card.techStack.map((tech) => (
              <p key={tech} className="bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2 uppercase">
                {tech}
              </p>
            ))}
          </div>
          <p className="text-lg text-slate-600 mb-2">Links</p>
          <div className="flex gap-6">
            {card.siteLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                className="font-medium text-lg rounded-full hover:text-purple-500 transition-all duration-300"
              >
                {link.url ? (link.label === "Live Site" ? `${link.label}🔗` : link.label) : ""}
                {/* {link.label === "Live Site" ? `${link.label}🔗` : link.label} */}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
