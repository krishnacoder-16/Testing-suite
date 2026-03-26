import { render, screen, waitFor } from "@testing-library/react";
import UserFetcher from "./UserFetcher";

// Mock the global fetch object
global.fetch = jest.fn();

describe("UserFetcher API Mocking Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("displays loading state initially and then displays the fetched user", async () => {
    // Mock the successful fetch response
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: "Leanne Graham", email: "Sincere@april.biz" }),
    });

    render(<UserFetcher />);
    
    // Assert loading state
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for the asynchronous fetch to resolve and update the DOM
    await waitFor(() => {
      expect(screen.getByTestId("user-info")).toBeInTheDocument();
    });

    // Assert final payload renders natively
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
  });

  test("displays error message when fetch fails (e.g. 500 error)", async () => {
    // Mock a simulated 500 non-ok response
    global.fetch.mockResolvedValueOnce({
      ok: false
    });

    render(<UserFetcher />);

    // Wait for the error branch to render
    await waitFor(() => {
      expect(screen.getByText("Error: API is down")).toBeInTheDocument();
    });
  });

  test("displays error message on total network failure", async () => {
    // Mock a network error
    global.fetch.mockRejectedValueOnce(new Error("Network Error"));

    render(<UserFetcher />);

    await waitFor(() => {
      expect(screen.getByText("Error: Network Error")).toBeInTheDocument();
    });
  });
});
