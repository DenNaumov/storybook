import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import styles from "./icon-button.module.css";
import { IconButton } from "./icon-button";

const getClassNames = (className?: string) =>
  new Set((className ?? "").split(" ").filter(Boolean));

describe("IconButton", () => {
  it("renders default sizes when no explicit sizes are passed", () => {
    const element = IconButton({
      icon: "add",
    });

    expect(isValidElement(element)).toBe(true);

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.iconButton)).toBe(true);
    expect(classes.has(styles.buttonSizeM)).toBe(true);

    const wrapper = Children.toArray(element.props.children)[0];
    expect(isValidElement(wrapper)).toBe(true);
    const wrapperClasses = getClassNames(wrapper.props.className);
    expect(wrapperClasses.has(styles.iconWrapper)).toBe(true);
    expect(wrapperClasses.has(styles.iconSizeM)).toBe(true);
  });

  it("renders custom sizes and badge count", () => {
    const element = IconButton({
      icon: "add",
      buttonSize: "s",
      iconSize: "s",
      badgeCount: "9",
    });

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.buttonSizeS)).toBe(true);

    const wrapper = Children.toArray(element.props.children)[0];
    expect(isValidElement(wrapper)).toBe(true);

    const wrapperClasses = getClassNames(wrapper.props.className);
    expect(wrapperClasses.has(styles.iconSizeS)).toBe(true);

    const wrapperChildren = Children.toArray(wrapper.props.children);
    expect(wrapperChildren).toHaveLength(2);
    expect(wrapperChildren[0]).toBe("add");
    expect(isValidElement(wrapperChildren[1])).toBe(true);
    expect(wrapperChildren[1].props.children).toBe("9");
  });

  it("applies pressed and disabled classes", () => {
    const element = IconButton({
      icon: "add",
      pressed: true,
      disabled: true,
    });

    expect(element.props.disabled).toBe(true);

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.pressed)).toBe(true);
    expect(classes.has(styles.disabled)).toBe(true);
  });
});
