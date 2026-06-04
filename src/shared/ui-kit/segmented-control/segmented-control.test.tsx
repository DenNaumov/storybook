import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";

import { SegmentedControl, SegmentedControlItem } from "./segmented-control";

describe("SegmentedControl", () => {
  it("renders items as a radiogroup", () => {
    render(
      <SegmentedControl aria-label="View mode">
        <SegmentedControlItem label="List" selected />
        <SegmentedControlItem label="Calendar" />
      </SegmentedControl>,
    );

    expect(
      screen.getByRole("radiogroup", { name: "View mode" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "List" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    expect(screen.getByRole("radio", { name: "Calendar" })).toHaveAttribute(
      "aria-checked",
      "false",
    );
  });

  it("calls item click handler", () => {
    const handleClick = jest.fn();

    render(
      <SegmentedControl>
        <SegmentedControlItem label="List" onClick={handleClick} />
      </SegmentedControl>,
    );

    fireEvent.click(screen.getByRole("radio", { name: "List" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("supports full width layout and custom props", () => {
    render(
      <SegmentedControl fullWidth className="custom-control" id="view-mode">
        <SegmentedControlItem label="List" />
      </SegmentedControl>,
    );

    const control = screen.getByRole("radiogroup");

    expect(control).toHaveAttribute("id", "view-mode");
    expect(control).toHaveClass("custom-control");
  });

  it("disables item interactions", () => {
    const handleClick = jest.fn();

    render(
      <SegmentedControl>
        <SegmentedControlItem label="Disabled" disabled onClick={handleClick} />
      </SegmentedControl>,
    );

    const item = screen.getByRole("radio", { name: "Disabled" });

    expect(item).toBeDisabled();

    fireEvent.click(item);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
