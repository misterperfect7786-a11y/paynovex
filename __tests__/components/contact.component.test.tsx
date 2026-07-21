import React from "react";
import { render } from "@testing-library/react";
import Contact from "../../components/Contact";

describe("Contact component", () => {
  it("renders CTAs and matches snapshot", () => {
    const { asFragment, getByRole } = render(<Contact />);
    expect(getByRole("button", { name: /Book a Call/i })).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
