import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Services section", () => {
  it("shows Enterprise Services heading and service cards", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /Enterprise Services/i })).toBeInTheDocument();

    // Expect known service headings to appear
    expect(screen.getByRole("heading", { name: /Recharge Services/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Banking Services/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Payment Solutions/i })).toBeInTheDocument();

    // basic sanity: there are multiple service headings
    const serviceHeadings = screen
      .getAllByRole("heading")
      .filter((h) => /Services|Solutions/i.test(h.textContent || ""));
    expect(serviceHeadings.length).toBeGreaterThanOrEqual(3);
  });
});
