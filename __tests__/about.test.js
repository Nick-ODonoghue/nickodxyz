import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "@/app/components/About";
import { work } from "@/app/data/aboutMe";

test("renders About without errors", () => {
  render(<About />);
});

test("renders about me description", () => {
  render(<About />);
  const aboutMe = screen.getByTestId("about-me");
  expect(aboutMe).toBeInTheDocument;
});

test("renders all about me sections", () => {
  render(<About />);
  const aboutMeSection = screen.getAllByTestId("about-me-sections");
  expect(aboutMeSection).toHaveLength(work.length);
});
