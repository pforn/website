import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders App component", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Assert that the Home component is rendered
  expect(screen.getByText("Home")).toBeInTheDocument();

  // Assert that the Resume component is not rendered
  expect(screen.queryByText("Resume")).toBeNull();

  // Assert that the Projects component is not rendered
  expect(screen.queryByText("Projects")).toBeNull();

  // Assert that the Blog component is not rendered
  expect(screen.queryByText("Blog")).toBeNull();
});

test("navigates to Resume component", () => {
  render(
    <MemoryRouter initialEntries={["/resume"]}>
      <App />
    </MemoryRouter>
  );

  // Assert that the Resume component is rendered
  expect(screen.getByText("Resume")).toBeInTheDocument();

  // Assert that the Home component is not rendered
  expect(screen.queryByText("Home")).toBeNull();

  // Assert that the Projects component is not rendered
  expect(screen.queryByText("Projects")).toBeNull();

  // Assert that the Blog component is not rendered
  expect(screen.queryByText("Blog")).toBeNull();
});

// Add more tests for other routes as needed
