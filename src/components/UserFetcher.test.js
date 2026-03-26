import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserFetcher from "./UserFetcher";

// Mock fetch globally
global.fetch = jest.fn();

describe("UserFetcher Component", () => {
  afterEach(() => {
    jest.clearAllMocks(); // reset mocks after each test
  });

  test("shows loading initially", () => {
    // mock API response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: "Krishna", email: "krishna@test.com" }),
    });

    render(<UserFetcher />);

    // check loading text
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("shows user data after successful fetch", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        name: "Krishna",
        email: "krishna@test.com",
      }),
    });

    render(<UserFetcher />);

    // wait for UI update
    await waitFor(() => {
      expect(screen.getByText("Krishna")).toBeInTheDocument();
      expect(screen.getByText("krishna@test.com")).toBeInTheDocument();
    });
  });

  test("shows error message when API fails", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    render(<UserFetcher />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument();
    });
  });
});