import AllofYou from "/public/AllofYou.jpg";
import EveryBiteCounts from "/public/EveryBiteCounts.jpg";
import FootySportsNews from "/public/Footy-Sports-News.jpg";

export const portfolioData = [
  {
    image: FootySportsNews,
    title: "Footy Sports News",
    description:
      "Get comprehensive team data and real-time news. Search any team and stay updated with club details, league data, and live updates. Fuel your football passion at Footy Sports News.",
    techStack: ["html", "css", "javascript", "node.js", "express.js", "axios", "heroku"],
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
    title: "Every Bite Counts",
    description:
      "Do you despair at the sky-high costs of fancy donuts in London? Have you ever just wanted a single bite of a donut and no more? Every Bite Counts is a digital marketplace app in which users can buy and sell portions of donuts, with location and flavour search.",
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
];
