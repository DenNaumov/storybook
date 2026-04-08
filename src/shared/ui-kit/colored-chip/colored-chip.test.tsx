import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";
import { ColoredChip } from "./colored-chip";
import { ResizableIcons } from "../icon";

describe("ColoredChip", () => {
  it("renders label with both icons", () => {
    const element = ColoredChip({
      label: "Сортировка",
      color: "#00c621",
      startIcon: ResizableIcons.Unarchive24,
      endIcon: ResizableIcons.InformationSquare,
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
