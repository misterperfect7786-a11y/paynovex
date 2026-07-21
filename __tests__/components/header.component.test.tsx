import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../../components/Header";

describe("Header component", () => {
  it("matches snapshot and renders nav", () => {
    const { asFragment, getAllByRole } = render(<Header />);
    expect(getAllByRole("link", { name: /Services/i }).length).toBeGreaterThanOrEqual(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it("closes the mobile navigation when a link is selected", async () => {
    const user = userEvent.setup();
    const { getByRole, getAllByRole } = render(<Header />);
    const toggle = getByRole("button", { name: /toggle navigation menu/i });

    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    // Click the last "Services" link (in mobile menu)
    const serviceLinks = getAllByRole("link", { name: /services/i });
    await user.click(serviceLinks[serviceLinks.length - 1]);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
