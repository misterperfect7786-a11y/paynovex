import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../app/page";

describe("Header", () => {
  it("renders navigation links and CTA buttons", async () => {
    render(<Home />);
    expect(screen.getAllByRole("link", { name: /Services/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole("link", { name: /APIs/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole("link", { name: /Contact/i }).length).toBeGreaterThanOrEqual(1);

    const menuButton = screen.getByRole("button", { name: /Toggle navigation menu/i });
    expect(menuButton).toBeInTheDocument();

    await userEvent.click(menuButton);
    expect(screen.getAllByRole("link", { name: /Services/i }).length).toBeGreaterThanOrEqual(2);

    const getStarted = screen.getAllByRole("button", { name: /Get Started/i })[0];
    expect(getStarted).toBeInTheDocument();
    await userEvent.click(getStarted);
  });
});
