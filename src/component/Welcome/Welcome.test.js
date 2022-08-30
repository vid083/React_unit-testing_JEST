import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("has correct welcome text", () => {
  render(<Welcome firstName="John" lastName="Doe" />);
  expect(screen.getByRole("heading")).toHaveTextContent("Welcome, John Doe");
});
