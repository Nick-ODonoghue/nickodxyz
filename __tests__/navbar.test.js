import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/app/components/Navbar";

test("render Navbar without errors", () => {
	render(<Navbar />);
});

test("displays the correct title", () => {
	render(<Navbar />);
	const titleElement = screen.getByText("NickOD.xyz");
	expect(titleElement).toBeInTheDocument;
});

test("renders all navigation links", () => {
	render(<Navbar />);
	const navLinks = screen.getAllByRole("link");
	expect(navLinks).toHaveLength(5);
});

test("each navigation link has the correct URL", () => {
	render(<Navbar />);
	const navLinks = screen.getAllByRole("link");
	const expectedUrls = ["/", "projects", "about", "tools", "contact"];
	navLinks.forEach((link, index) => {
		const url = link.getAttribute("href");
		const expectedUrl = expectedUrls[index];
		expect(url).toEqual(`#${expectedUrl}`);
	});
});

// Leaving the below test for now, until I work out how to set each link as active once clicked

// test("active navigation link has the correct styling", () => {
// 	render(<Navbar />);
// 	const activeLink = screen.getByRole("link", { name: ".home()" });
// 	// Replace with the active link name
// 	expect(activeLink).toHaveClass("active");
// 	// Replace with the correct CSS class for active styling
// });
