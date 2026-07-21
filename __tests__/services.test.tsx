import React from "react";
import { render, screen, within } from "@testing-library/react";
import Home from "../app/page";

describe("Services section", () => {
  it("shows Enterprise Services heading and service cards", () => {
    render(<Home />);
    const servicesSection = screen.getByRole("region", { name: /Enterprise Services/i });
    expect(servicesSection).toBeInTheDocument();

    // Expect known service headings to appear within the services section
    const sectionHeadings = within(servicesSection);
    expect(
      sectionHeadings.getByRole("heading", { name: /Recharge Services/i })
    ).toBeInTheDocument();
    expect(sectionHeadings.getByRole("heading", { name: /Banking Services/i })).toBeInTheDocument();
    expect(
      sectionHeadings.getByRole("heading", { name: /Payment Solutions/i })
    ).toBeInTheDocument();

    // basic sanity: there are multiple service headings
    const serviceHeadings = sectionHeadings.getAllByRole("heading");
    expect(serviceHeadings.length).toBeGreaterThanOrEqual(4);
  });
});
