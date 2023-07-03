import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/app/components/Navbar";
import { NavbarLinks } from "@/app/components/NavbarLinks";

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
  expect(navLinks).toHaveLength(6);
});

test("each navigation link has the correct URL", () => {
  render(<NavbarLinks />);
  const navLinks = screen.getAllByRole("link");
  const expectedUrls = ["#top", "#projects", "#about", "#tools"];
  navLinks.forEach((link, index) => {
    const url = link.getAttribute("href");
    const expectedUrl = expectedUrls[index];
    expect(url).toEqual(expectedUrl);
  });
});
