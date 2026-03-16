import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import { ChipButton } from "./chip-button";

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;

describe("ChipButton", () => {
  it("renders label with both icons in the expected order", () => {
    const element = ChipButton({
      size: "l",
      label: "Sort",
      startIcon: "start",
      endIcon: "end",
      active: true,
    });

    expect(isValidElement(element)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(3);
    expect(children[0]).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({ children: "start" }),
      }),
    );
    expect(children[1]).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({ children: "Sort" }),
      }),
    );
    expect(children[2]).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({ children: "end" }),
      }),
    );
  });

  it("renders icon-only content when there is no label", () => {
    const element = ChipButton({
      size: "s",
      startIcon: "start",
    });

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);
    expect(children[0]).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({ children: "start" }),
      }),
    );
  });

  it("passes through disabled state and children content", () => {
    const element = ChipButton({
      size: "m",
      disabled: true,
      children: "Custom content",
    });

    expect(element.props.disabled).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);
    const contentNode = children[0];
    expect(isValidElement(contentNode)).toBe(true);
    if (!isValidElement(contentNode)) {
      throw new Error("Expected content node to be a React element.");
    }
    expect((contentNode as ElementWithChildren).props.children).toBe(
      "Custom content",
    );
  });
});
