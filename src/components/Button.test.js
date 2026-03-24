import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders button", () => {
    render(<Button text="Click Me" />);
  });

  test("displays correct text", () => {
    render(<Button text="Click Me" />);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });
});