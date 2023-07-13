import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "NickOD.xyz | Full-Stack Web Developer",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${exo.className} w-full min-h-screen container mx-auto `}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
