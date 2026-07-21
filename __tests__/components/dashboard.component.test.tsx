import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import DashboardCards from "../../components/DashboardCards";

expect.extend(toHaveNoViolations);

describe("DashboardCards component", () => {
  it("renders and has no accessibility violations", async () => {
    const { container, getByText } = render(<DashboardCards />);
    expect(getByText(/Wallet Balance/i)).toBeTruthy();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
