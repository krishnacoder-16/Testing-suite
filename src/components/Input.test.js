import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  test("renders input without crashing", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  test("displays correct value passed via props", () => {
    render(<Input placeholder="Name" value="John Doe" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText("Name");
    expect(inputElement).toHaveValue("John Doe");
  });
});
