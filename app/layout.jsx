import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "NickOD.xyz | Full-Stack Web Developer",
	description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} container mx-auto px-1`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
