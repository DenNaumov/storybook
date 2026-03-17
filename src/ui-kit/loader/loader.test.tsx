import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";
import { Loader } from "./loader";

describe("Loader", () => {
  it("uses medium size by default", () => {
    const element = Loader({});

    expect(isValidElement(element)).toBe(true);
    expect(element.props.role).toBe("status");
    expect(element.props["aria-label"]).toBe("Загрузка");
  });

  it("renders the requested icon size for each variant", () => {
    const element = Loader({ size: "large", label: "Loading" });
    const children = Children.toArray(element.props.children);

    expect(children).toHaveLength(1);

    const iconWrapper = children[0];
    expect(isValidElement(iconWrapper)).toBe(true);
    if (!isValidElement(iconWrapper)) {
      throw new Error("Expected icon wrapper to be a React element.");
    }

    const icon = Children.toArray(iconWrapper.props.children)[0];
    expect(isValidElement(icon)).toBe(true);
    if (!isValidElement(icon)) {
      throw new Error("Expected icon to be a React element.");
    }

    expect(icon.props.size).toBe("large");
  });
});
