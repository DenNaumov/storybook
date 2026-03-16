import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import { ListButton } from "./list-button";

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;

describe("ListButton", () => {
  it("renders label without icon by default", () => {
    const element = ListButton({
      label: "Button_text",
    });

    expect(isValidElement(element)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);
    const labelNode = children[0];
    expect(isValidElement(labelNode)).toBe(true);
    if (!isValidElement(labelNode)) {
      throw new Error("Expected label node to be a React element.");
    }
    expect((labelNode as ElementWithChildren).props.children).toBe("Button_text");
  });

  it("renders the start icon when provided", () => {
    const element = ListButton({
      label: "Button_text",
      startIcon: "person",
      pressed: true,
    });

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(2);
    const iconNode = children[0];
    expect(isValidElement(iconNode)).toBe(true);
    if (!isValidElement(iconNode)) {
      throw new Error("Expected icon node to be a React element.");
    }
    expect((iconNode as ElementWithChildren).props.children).toBe("person");
  });

  it("falls back to children content and supports disabled state", () => {
    const element = ListButton({
      children: "Custom text",
      disabled: true,
    });

    expect(element.props.disabled).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);
    const contentNode = children[0];
    expect(isValidElement(contentNode)).toBe(true);
    if (!isValidElement(contentNode)) {
      throw new Error("Expected content node to be a React element.");
    }
    expect((contentNode as ElementWithChildren).props.children).toBe("Custom text");
  });
});
