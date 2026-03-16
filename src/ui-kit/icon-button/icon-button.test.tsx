import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import { IconButton } from "./icon-button";

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;

describe("IconButton", () => {
  it("renders when explicit sizes are passed", () => {
    const element = IconButton({
      buttonSize: "m",
      iconSize: "m",
      icon: "add",
    });

    expect(isValidElement(element)).toBe(true);

    const wrapper = Children.toArray(element.props.children)[0];
    expect(isValidElement(wrapper)).toBe(true);
    if (!isValidElement(wrapper)) {
      throw new Error("Expected wrapper to be a React element.");
    }
  });

  it("renders custom sizes and badge count", () => {
    const element = IconButton({
      icon: "add",
      buttonSize: "s",
      iconSize: "s",
      badgeCount: "9",
    });

    const wrapper = Children.toArray(element.props.children)[0];
    expect(isValidElement(wrapper)).toBe(true);
    if (!isValidElement(wrapper)) {
      throw new Error("Expected wrapper to be a React element.");
    }

    const wrapperChildren = Children.toArray(
      (wrapper as ElementWithChildren).props.children,
    );
    expect(wrapperChildren).toHaveLength(2);
    expect(wrapperChildren[0]).toBe("add");
    const badgeNode = wrapperChildren[1];
    expect(isValidElement(badgeNode)).toBe(true);
    if (!isValidElement(badgeNode)) {
      throw new Error("Expected badge node to be a React element.");
    }
    expect((badgeNode as ElementWithChildren).props.children).toBe("9");
  });

  it("passes through pressed and disabled state", () => {
    const element = IconButton({
      icon: "add",
      buttonSize: "m",
      iconSize: "m",
      pressed: true,
      disabled: true,
    });

    expect(element.props.disabled).toBe(true);
  });
});
