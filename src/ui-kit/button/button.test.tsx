import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import styles from "./button.module.css";
import { Button } from "./button";

const getClassNames = (className?: string) =>
  new Set((className ?? "").split(" ").filter(Boolean));

type ElementWithProps<TProps = Record<string, unknown>> = ReactElement<TProps>;

describe("Button", () => {
  it("uses outlined as the default variant and medium as the default size", () => {
    const element = Button({ label: "Save" });

    expect(isValidElement(element)).toBe(true);
    expect(element.props.type).toBe("button");

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.button)).toBe(true);
    expect(classes.has(styles.variantOutlined)).toBe(true);
    expect(classes.has(styles.sizeM)).toBe(true);
  });

  it("falls back to the primary variant from the legacy primary prop and normalizes legacy sizes", () => {
    const element = Button({ primary: true, size: "small", label: "Save" });
    const classes = getClassNames(element.props.className);

    expect(classes.has(styles.variantPrimary)).toBe(true);
    expect(classes.has(styles.sizeS)).toBe(true);
  });

  it("renders icons and loading state correctly", () => {
    const startIcon = "start";
    const endIcon = "end";
    const element = Button({
      label: "Save",
      startIcon,
      endIcon,
      loading: true,
    });

    expect(element.props.disabled).toBe(true);
    expect(element.props["aria-busy"]).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(2);

    const content = children[0];
    const spinner = children[1];

    if (!isValidElement(content)) {
      throw new Error("Expected button content to be a React element.");
    }
    const contentElement = content as ElementWithProps<{
      children?: ReactNode;
      "data-hidden"?: string;
    }>;
    expect(contentElement.props["data-hidden"]).toBe("true");

    const contentChildren = Children.toArray(contentElement.props.children);
    expect(contentChildren).toHaveLength(3);
    expect(contentChildren[1]).toBe("Save");

    const startIconNode = contentChildren[0];
    if (!isValidElement(startIconNode)) {
      throw new Error("Expected start icon to be a React element.");
    }
    const startIconElement = startIconNode as ElementWithProps<{
      children?: ReactNode;
    }>;
    expect(startIconElement.props.children).toBe(startIcon);

    const endIconNode = contentChildren[2];
    if (!isValidElement(endIconNode)) {
      throw new Error("Expected end icon to be a React element.");
    }
    const endIconElement = endIconNode as ElementWithProps<{
      children?: ReactNode;
    }>;
    expect(endIconElement.props.children).toBe(endIcon);

    if (!isValidElement(spinner)) {
      throw new Error("Expected spinner to be a React element.");
    }
    const spinnerElement = spinner as ElementWithProps<{
      "aria-hidden"?: string;
    }>;
    expect(spinnerElement.props["aria-hidden"]).toBe("true");
  });

  it("applies pressed and disabled classes when requested", () => {
    const element = Button({
      variant: "text",
      label: "Save",
      pressed: true,
      disabled: true,
    });

    const classes = getClassNames(element.props.className);

    expect(element.props.disabled).toBe(true);
    expect(classes.has(styles.variantText)).toBe(true);
    expect(classes.has(styles.pressed)).toBe(true);
    expect(classes.has(styles.disabled)).toBe(true);
  });
});
