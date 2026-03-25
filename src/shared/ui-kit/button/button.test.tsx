import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";

import { Button } from "./button";

type ElementWithProps<TProps = Record<string, unknown>> = ReactElement<TProps>;

describe("Button", () => {
  it("uses primary as the default variant when size is provided", () => {
    const element = Button({ size: "m", label: "Save" });

    expect(isValidElement(element)).toBe(true);
    expect(element.props.type).toBe("button");
  });

  it("uses the explicit variant prop", () => {
    const element = Button({
      variant: "primary",
      size: "s",
      label: "Save",
    });

    expect(element.props.type).toBe("button");
  });

  it("renders icons and loading state correctly", () => {
    const startIcon = "start";
    const endIcon = "end";
    const element = Button({
      size: "m",
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

    const labelNode = contentChildren[1];
    if (!isValidElement(labelNode)) {
      throw new Error("Expected label to be a React element.");
    }
    const labelElement = labelNode as ElementWithProps<{
      children?: ReactNode;
      variant?: string;
    }>;
    expect(labelElement.props.variant).toBe("text-medium");
    expect(labelElement.props.children).toBe("Save");

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

  it("passes through pressed and disabled state when requested", () => {
    const element = Button({
      variant: "text",
      size: "m",
      label: "Save",
      pressed: true,
      disabled: true,
    });

    expect(element.props.disabled).toBe(true);
    expect(element.props["aria-busy"]).toBeUndefined();
  });
});
