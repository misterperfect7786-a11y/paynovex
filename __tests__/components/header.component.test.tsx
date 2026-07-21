import React from "react";
import { render } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header component", () => {
  it("matches snapshot and renders nav", () => {
    const { asFragment, getByRole } = render(<Header />);
    expect(getByRole("link", { name: /Services/i })).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
