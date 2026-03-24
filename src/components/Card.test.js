import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  test("renders card without crashing", () => {
    render(<Card title="Test Title" content="Test Content" />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  test("displays correct title and content passed via props", () => {
    render(<Card title="My Title" content="My Content" />);
    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.getByText("My Content")).toBeInTheDocument();
  });
});
