import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import { InlineButton } from "./inline-button";

describe("InlineButton", () => {
  it("renders the surface variant by default", () => {
    const element = InlineButton({
      icon: "icon",
      label: "Reset",
    });

    expect(isValidElement(element)).toBe(true);
  });

  it("renders icon and label in order", () => {
    const element = InlineButton({
      variant: "primary",
      icon: "calendar",
      label: "Reset",
    });

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(2);
    expect(isValidElement(children[0])).toBe(true);
    expect(children[0].props.children).toBe("calendar");
    expect(isValidElement(children[1])).toBe(true);
    expect(children[1].props.children).toBe("Reset");
  });

  it("applies disabled state", () => {
    const element = InlineButton({
      variant: "bezeled",
      icon: "calendar",
      label: "Reset",
      disabled: true,
    });

    expect(element.props.disabled).toBe(true);
  });
});
