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

  it("renders items from config", () => {
    render(
      <SegmentedControl
        aria-label="Tabs"
        items={[
          { key: "main", label: "Основное", selected: true },
          { key: "second", label: "Item #2" },
        ]}
      />,
    );

    expect(screen.getByRole("radio", { name: "Основное" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    expect(screen.getByRole("radio", { name: "Item #2" })).toHaveAttribute(
      "aria-checked",
      "false",
    );
  });

  it("calls configured item click handler", () => {
    const handleClick = jest.fn();

    render(
      <SegmentedControl
        items={[{ key: "clickable", label: "Clickable", onClick: handleClick }]}
      />,
    );

    fireEvent.click(screen.getByRole("radio", { name: "Clickable" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("uses default key for configured items", () => {
    render(
      <SegmentedControl
        defaultValue="second"
        items={[
          { key: "main", label: "Основное" },
          { key: "second", label: "Item #2" },
        ]}
      />,
    );

    expect(screen.getByRole("radio", { name: "Основное" })).toHaveAttribute(
      "aria-checked",
      "false",
    );
    expect(screen.getByRole("radio", { name: "Item #2" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });

  it("changes selected item and calls onChange", () => {
    const handleChange = jest.fn();

    render(
      <SegmentedControl
        defaultValue="main"
        onChange={handleChange}
        items={[
          { key: "main", label: "Основное" },
          { key: "second", label: "Item #2" },
        ]}
      />,
    );

    const secondItem = screen.getByRole("radio", { name: "Item #2" });

    fireEvent.click(secondItem);

    expect(secondItem).toHaveAttribute("aria-checked", "true");
    expect(handleChange).toHaveBeenCalledWith(
      "second",
      expect.objectContaining({ label: "Item #2", key: "second" }),
      1,
    );
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
