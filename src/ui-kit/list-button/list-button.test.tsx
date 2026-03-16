import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import styles from "./list-button.module.css";
import { ListButton } from "./list-button";

const getClassNames = (className?: string) => new Set((className ?? "").split(" ").filter(Boolean));

describe("ListButton", () => {
  it("renders label without icon by default", () => {
    const element = ListButton({
      label: "Button_text",
    });

    expect(isValidElement(element)).toBe(true);

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.listButton)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);
    expect(isValidElement(children[0])).toBe(true);
    expect(children[0].props.children).toBe("Button_text");
  });

  it("renders the start icon when provided", () => {
    const element = ListButton({
      label: "Button_text",
      startIcon: "person",
      pressed: true,
    });

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.pressed)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(2);
    expect(isValidElement(children[0])).toBe(true);
    expect(children[0].props.children).toBe("person");
  });

  it("falls back to children content and supports disabled state", () => {
    const element = ListButton({
      children: "Custom text",
      disabled: true,
    });

    expect(element.props.disabled).toBe(true);

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.disabled)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);
    expect(isValidElement(children[0])).toBe(true);
    expect(children[0].props.children).toBe("Custom text");
  });
});
