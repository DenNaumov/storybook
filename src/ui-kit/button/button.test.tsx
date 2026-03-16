import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import styles from "./button.module.css";
import { Button } from "./button";

const getClassNames = (className?: string) => new Set((className ?? "").split(" ").filter(Boolean));

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

    expect(isValidElement(content)).toBe(true);
    expect(content.props["data-hidden"]).toBe("true");

    const contentChildren = Children.toArray(content.props.children);
    expect(contentChildren).toHaveLength(3);
    expect(contentChildren[1]).toBe("Save");

    expect(isValidElement(contentChildren[0])).toBe(true);
    expect(contentChildren[0].props.children).toBe(startIcon);

    expect(isValidElement(contentChildren[2])).toBe(true);
    expect(contentChildren[2].props.children).toBe(endIcon);

    expect(isValidElement(spinner)).toBe(true);
    expect(spinner.props["aria-hidden"]).toBe("true");
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
