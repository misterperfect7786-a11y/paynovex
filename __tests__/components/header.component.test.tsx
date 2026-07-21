import React from "react";
import { render } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header component", () => {
  it("matches snapshot and renders nav", () => {
    const { asFragment, getAllByRole } = render(<Header />);
    expect(getAllByRole("link", { name: /Services/i }).length).toBeGreaterThanOrEqual(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
