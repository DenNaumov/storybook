import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";

import { ListButton } from "./list-button";

describe("ListButton", () => {
  it("renders label without icon by default", () => {
    render(<ListButton label="Button_text" />);

    expect(
      screen.getByRole("button", { name: "Button_text" }),
    ).toBeInTheDocument();
  });

  it("renders the start icon when provided", () => {
    render(<ListButton label="Button_text" startIcon="person" pressed />);

    const button = screen.getByRole("button", {
      name: "person Button_text",
    });

    expect(within(button).getByText("person")).toBeInTheDocument();
  });

  it("falls back to children content and supports disabled state", () => {
    render(<ListButton disabled>Custom text</ListButton>);

    const button = screen.getByRole("button", { name: "Custom text" });

    expect(button).toBeDisabled();
    expect(within(button).getByText("Custom text")).toBeInTheDocument();
  });
});
