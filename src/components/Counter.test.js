import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component Interaction Tests", () => {
  test("increments count by 1 when the button is clicked", async () => {
    render(<Counter />);
    
    const display = screen.getByTestId("count-display");
    expect(display).toHaveTextContent("Count: 0");

    const user = userEvent.setup();
    
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);

    expect(display).toHaveTextContent("Count: 1");
  });
});
