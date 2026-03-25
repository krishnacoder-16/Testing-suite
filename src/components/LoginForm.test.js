import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm Interaction Tests", () => {
  test("updates input value when user types", async () => {
    render(<LoginForm />);
    
    const input = screen.getByLabelText("Username");
    const user = userEvent.setup();

    await user.type(input, "Alice");

    expect(input).toHaveValue("Alice");
  });

  test("submits the form and displays a welcome message", async () => {
    render(<LoginForm />);
    
    const input = screen.getByPlaceholderText("Enter username");
    const submitButton = screen.getByRole("button", { name: "Submit" });
    const user = userEvent.setup();

    await user.type(input, "Bob");
    await user.click(submitButton);

    const message = screen.getByTestId("welcome-message");
    expect(message).toHaveTextContent("Welcome, Bob!");
  });
});
