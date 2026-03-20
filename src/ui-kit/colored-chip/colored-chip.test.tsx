import { Icon20 } from "../icon/icon-wrappers";
import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";
import { ColoredChip } from "./colored-chip";

describe("ColoredChip", () => {
  it("renders label with both icons", () => {
    const element = ColoredChip({
      label: "Сортировка",
      tone: "green",
      startIcon: "Unarchive24",
      endIcon: <Icon20 icon="Cancel" size={20} color="currentColor" />,
    });

    expect(isValidElement(element)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(3);
  });

  it("applies multiline class when requested", () => {
    const element = ColoredChip({
      label: "Много\nстрок",
      multiline: true,
    });

    expect(element.props.className).toContain("multiline");
  });
});
