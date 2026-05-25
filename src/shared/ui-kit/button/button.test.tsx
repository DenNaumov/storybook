import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";

import { Button } from "./button";

describe("Button", () => {
  it("uses primary as the default variant when size is provided", () => {
    render(<Button size="m" label="Save" />);

    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute(
      "type",
      "button",
    );
  });

  it("uses the explicit variant prop", () => {
    render(<Button variant="primary" size="s" label="Save" />);

    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute(
      "type",
      "button",
    );
  });

  it("renders icons and loading state correctly", () => {
    render(
      <Button
        size="m"
        label="Save"
        startIcon="start"
        endIcon="end"
        loading
      />,
    );

    const button = screen.getByRole("button", { name: "start Save end" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(within(button).getByText("start")).toBeInTheDocument();
    expect(within(button).getByText("Save")).toBeInTheDocument();
    expect(within(button).getByText("end")).toBeInTheDocument();
    expect(button.querySelector('[data-hidden="true"]')).not.toBeNull();
    expect(button.querySelector('[aria-hidden="true"]')).not.toBeNull();
  });

  it("passes through pressed and disabled state when requested", () => {
    render(<Button variant="text" size="m" label="Save" pressed disabled />);

    const button = screen.getByRole("button", { name: "Save" });

    expect(button).toBeDisabled();
    expect(button).not.toHaveAttribute("aria-busy");
  });
});
