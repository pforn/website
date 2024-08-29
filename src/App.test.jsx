import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Home component by default after loading", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Wait for the PreLoader to disappear
  await waitFor(() => expect(screen.queryByTestId("preloader")).toBeNull());

  // Assert that the Home component is rendered
  await waitFor(() =>
    expect(
      screen.getByText("Welcome to My Personal Website")
    ).toBeInTheDocument()
  );

  // Assert that the Resume component is not rendered
  expect(screen.queryByText("Resume")).toBeNull();

  // Assert that the Projects component is not rendered
  expect(screen.queryByText("Projects")).toBeNull();

  // Assert that the Blog component is not rendered
  expect(screen.queryByText("Blog")).toBeNull();
});
