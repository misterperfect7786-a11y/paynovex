import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("API Platform", () => {
  it("renders API examples", () => {
    render(<Home />);
    expect(screen.getByText(/POST \/api\/v1\/recharge/i)).toBeInTheDocument();
    expect(screen.getByText(/POST \/api\/v1\/upi\/collect/i)).toBeInTheDocument();
    const matches = screen.getAllByText(/settlement.completed/i);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });
});
