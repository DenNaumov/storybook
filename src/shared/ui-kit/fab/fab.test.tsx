import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";

import { FAB } from "./fab";

describe("FAB", () => {
  it("renders the primary variant by default", () => {
    render(<FAB />);

    expect(screen.getByRole("button", { name: "+" })).toBeEnabled();
  });

  it("renders the provided icon and pressed state", () => {
    render(<FAB variant="bezeled" icon="icon" pressed />);

    const button = screen.getByRole("button", { name: "icon" });

    expect(within(button).getByText("icon")).toBeInTheDocument();
  });

  it("falls back to children and disables interaction when disabled", () => {
    render(
      <FAB variant="white" disabled>
        child-icon
      </FAB>,
    );

    const button = screen.getByRole("button", { name: "child-icon" });

    expect(button).toBeDisabled();
    expect(within(button).getByText("child-icon")).toBeInTheDocument();
  });
});
