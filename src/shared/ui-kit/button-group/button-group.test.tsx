import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";

import { ButtonGroup } from "./button-group";

describe("ButtonGroup", () => {
  it("renders children by default", () => {
    render(<ButtonGroup>content</ButtonGroup>);

    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("passes through custom props", () => {
    render(
      <ButtonGroup withSpacing className="custom-group" id="group-id">
        content
      </ButtonGroup>,
    );

    const group = screen.getByText("content");

    expect(group).toHaveAttribute("id", "group-id");
    expect(group).toHaveClass("custom-group");
  });

  it("supports different layout props", () => {
    render(
      <ButtonGroup direction="horizontalFixed" gap={0}>
        content
      </ButtonGroup>,
    );

    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("renders horizontal direction and passes through extra props", () => {
    render(
      <ButtonGroup direction="horizontal" id="group-id">
        content
      </ButtonGroup>,
    );

    expect(screen.getByText("content")).toHaveAttribute("id", "group-id");
  });
});
