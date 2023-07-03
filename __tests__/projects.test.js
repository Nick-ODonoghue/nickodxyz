import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "@/app/components/Projects";
import { portfolioData } from "@/app/data/projectCards";

test("renders Projects without errors", () => {
  render(<Projects />);
});

test("renders all project cards", () => {
  render(<Projects />);
  const projectCards = screen.getAllByTestId("project-card");
  expect(projectCards).toHaveLength(portfolioData.length);
});

test("displays project titles correctly", () => {
  render(<Projects />);
  const projectTitles = screen.getAllByTestId("project-card");
  projectTitles.forEach((title, index) => {
    expect(title).toHaveTextContent(portfolioData[index].title);
  });
});
