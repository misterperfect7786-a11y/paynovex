import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../app/page";

describe("Header", () => {
  it("renders navigation links and CTA buttons", async () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /APIs/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contact/i })).toBeInTheDocument();

    const getStarted = screen.getAllByRole("button", { name: /Get Started/i })[0];
    expect(getStarted).toBeInTheDocument();

    // interaction: click Get Started (no navigation — just ensure no error)
    await userEvent.click(getStarted);
  });
});
