import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import { FAB } from "./fab";

describe("FAB", () => {
  it("renders the primary variant by default", () => {
    const element = FAB({});

    expect(isValidElement(element)).toBe(true);
    expect(element.props.disabled).toBeUndefined();
  });

  it("renders the provided icon and pressed state", () => {
    const element = FAB({
      variant: "bezeled",
      icon: "icon",
      pressed: true,
    });

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

    const child = Children.toArray(element.props.children)[0];
    expect(isValidElement(child)).toBe(true);
    expect(child.props.children).toBe("child-icon");
  });
});
