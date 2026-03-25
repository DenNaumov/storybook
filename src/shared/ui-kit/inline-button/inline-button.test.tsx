import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import { InlineButton } from "./inline-button";

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;

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
    const iconNode = children[0];
    expect(isValidElement(iconNode)).toBe(true);
    if (!isValidElement(iconNode)) {
      throw new Error("Expected icon node to be a React element.");
    }
    expect((iconNode as ElementWithChildren).props.children).toBe("calendar");

    const labelNode = children[1];
    expect(isValidElement(labelNode)).toBe(true);
    if (!isValidElement(labelNode)) {
      throw new Error("Expected label node to be a React element.");
    }
    expect((labelNode as ElementWithChildren).props.children).toBe("Reset");
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
