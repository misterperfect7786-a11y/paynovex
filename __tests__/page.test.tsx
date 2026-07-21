import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home page", () => {
  it("renders the hero heading", () => {
    render(<Home />);
    const heading = screen.getByText(/India.*Digital Commerce/i);
    expect(heading).toBeInTheDocument();
  });

  it("has Get Started button", () => {
    render(<Home />);
    const btn = screen.getAllByText(/Get Started/i)[0];
    expect(btn).toBeInTheDocument();
  });
});
