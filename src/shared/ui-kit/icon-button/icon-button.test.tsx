import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";

import { IconButton } from "./icon-button";

const SvgMock = () => <svg data-testid="button-icon" />;

describe("IconButton", () => {
  it("renders when explicit sizes are passed", () => {
    const { container } = render(
      <IconButton
        buttonSize="m"
        iconSize="m"
        icon={SvgMock}
        aria-label="Add"
      />,
    );

    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("renders custom sizes and badge count", () => {
    render(
      <IconButton
        icon={SvgMock}
        buttonSize="s"
        iconSize="s"
        badgeCount="9"
        aria-label="Add"
      />,
    );

    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
  });

  it("passes through pressed and disabled state", () => {
    render(
      <IconButton
        icon={SvgMock}
        buttonSize="m"
        iconSize="m"
        pressed
        disabled
        aria-label="Add"
      />,
    );

    expect(screen.getByRole("button", { name: "Add" })).toBeDisabled();
  });
});
