import React from "react";
import { render } from "@testing-library/react";
import Apis from "../../components/Apis";

describe("Apis component", () => {
  it("renders API blocks and matches snapshot", () => {
    const { asFragment, getByText } = render(<Apis />);
    expect(getByText(/POST \/api\/v1\/recharge/i)).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
