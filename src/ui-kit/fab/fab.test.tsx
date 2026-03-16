import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import styles from "./fab.module.css";
import { FAB } from "./fab";

const getClassNames = (className?: string) =>
  new Set((className ?? "").split(" ").filter(Boolean));

describe("FAB", () => {
  it("renders the primary variant by default", () => {
    const element = FAB({});

    expect(isValidElement(element)).toBe(true);
    expect(element.props.disabled).toBeUndefined();

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.fab)).toBe(true);
    expect(classes.has(styles.variantPrimary)).toBe(true);
  });

  it("renders the provided icon and pressed state", () => {
    const element = FAB({
      variant: "bezeled",
      icon: "icon",
      pressed: true,
    });

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.variantBezeled)).toBe(true);
    expect(classes.has(styles.pressed)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);
    expect(isValidElement(children[0])).toBe(true);
    expect(children[0].props.children).toBe("icon");
  });

  it("falls back to children and disables interaction when disabled", () => {
    const element = FAB({
      variant: "white",
      children: "child-icon",
      disabled: true,
    });

    expect(element.props.disabled).toBe(true);

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.variantWhite)).toBe(true);
    expect(classes.has(styles.disabled)).toBe(true);

    const child = Children.toArray(element.props.children)[0];
    expect(isValidElement(child)).toBe(true);
    expect(child.props.children).toBe("child-icon");
  });
});
