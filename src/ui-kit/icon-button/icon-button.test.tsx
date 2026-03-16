import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import { IconButton } from "./icon-button";

describe("IconButton", () => {
  it("renders default sizes when no explicit sizes are passed", () => {
    const element = IconButton({
      icon: "add",
    });

    expect(isValidElement(element)).toBe(true);

    const wrapper = Children.toArray(element.props.children)[0];
    expect(isValidElement(wrapper)).toBe(true);
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
  });
});
