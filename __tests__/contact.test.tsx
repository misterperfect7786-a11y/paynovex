import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../app/page";

describe("Contact section", () => {
  it("renders contact CTAs and responds to clicks", async () => {
    render(<Home />);
    const book = screen.getByRole("button", { name: /Book a Call/i });
    const contact = screen.getByRole("button", { name: /Contact Sales/i });

    expect(book).toBeInTheDocument();
    expect(contact).toBeInTheDocument();

    await userEvent.click(book);
    await userEvent.click(contact);
  });
});
