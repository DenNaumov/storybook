import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";
import { ColoredChip } from "./colored-chip";

describe("ColoredChip", () => {
  it("renders label with both icons", () => {
    const element = ColoredChip({
      label: "Сортировка",
      color: "#00c621",
      startIcon: "Unarchive24",
      endIcon: "InformationSquare",
    });

    expect(isValidElement(element)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(3);
  });

  it("applies multiline class when requested", () => {
    const element = ColoredChip({
      label: "Много\nстрок",
      color: "#00c621",
      multiline: true,
    });

    expect(element.props.className).toContain("multiline");
  });
});
