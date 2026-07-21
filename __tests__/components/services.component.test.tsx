import React from "react";
import { render } from "@testing-library/react";
import Services from "../../components/Services";

describe("Services component", () => {
  it("renders and matches snapshot", () => {
    const { asFragment, getByRole } = render(<Services />);
    expect(getByRole("heading", { name: /Enterprise Services/i })).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
