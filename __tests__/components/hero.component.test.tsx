import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Hero from "../../components/Hero";

expect.extend(toHaveNoViolations);

describe("Hero component", () => {
  it("renders and is accessible", async () => {
    const { container, getByText } = render(<Hero />);
    expect(getByText(/India’s Complete Digital Commerce/i)).toBeTruthy();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
