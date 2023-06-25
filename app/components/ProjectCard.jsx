import Link from "next/link";
import Image from "next/image";
import AllofYou from "/public/AllofYou.jpg";
import EveryBiteCounts from "/public/EveryBiteCounts.jpg";
import FootySportsNews from "/public/Footy-Sports-News.jpg";

export default function ProjectCard() {
  return (
    <div>
      <div>
        <Image src={AllofYou} alt="All of You"></Image>
      </div>
      <div>
        <h2>All of You</h2>
      </div>
      <div>tech stack goes here</div>
      <div>
        <Link href="https://www.AllofYou.art" target="_blank">
          Live Site
        </Link>
      </div>
    </div>
  );
}

{
  /* <Image src={EveryBiteCounts} alt="Every Bite Counts"></Image> */
}
{
  /* <Image src={FootySportsNews} alt="Footy Sports News"></Image> */
}
