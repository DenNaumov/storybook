import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import styles from "./chip-button.module.css";
import { ChipButton } from "./chip-button";

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;

const getClassNames = (className?: string) =>
  new Set((className ?? "").split(" ").filter(Boolean));

describe("ChipButton", () => {
  it("renders label with both icons and applies active state classes", () => {
    const element = ChipButton({
      size: "l",
      label: "Sort",
      startIcon: "start",
      endIcon: "end",
      active: true,
    });

    expect(isValidElement(element)).toBe(true);

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.chipButton)).toBe(true);
    expect(classes.has(styles.sizeL)).toBe(true);
    expect(classes.has(styles.active)).toBe(true);
    expect(classes.has(styles.hasStartIcon)).toBe(true);
    expect(classes.has(styles.hasEndIcon)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(3);
    expect(children[1]).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({ children: "Sort" }),
      }),
    );
  });

  it("uses iconOnly when there is no label content", () => {
    const element = ChipButton({
      size: "s",
      startIcon: "start",
    });

    const classes = getClassNames(element.props.className);

    expect(classes.has(styles.sizeS)).toBe(true);
    expect(classes.has(styles.iconOnly)).toBe(true);
  });

  it("passes through disabled state and children content", () => {
    const element = ChipButton({
      disabled: true,
      children: "Custom content",
    });

    expect(element.props.disabled).toBe(true);

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.disabled)).toBe(true);

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
