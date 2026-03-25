import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it } from "@jest/globals";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders medium badge count with caption typography by default", () => {
    const element = Badge({ count: 42 });

    expect(isValidElement(element)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);

    const labelNode = children[0];
    expect(isValidElement(labelNode)).toBe(true);
    if (!isValidElement(labelNode)) {
      throw new Error("Expected label node to be a React element.");
    }

    const labelElement = labelNode as ReactElement<{
      children?: ReactNode;
      variant?: string;
    }>;
    expect(labelElement.props.variant).toBe("caption1-semibold");
    expect(labelElement.props.children).toBe(42);
  });

  it("renders large badge content with subheadline typography", () => {
    const element = Badge({
      size: "large",
      children: "99+",
    });

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);

    const labelNode = children[0];
    expect(isValidElement(labelNode)).toBe(true);
    if (!isValidElement(labelNode)) {
      throw new Error("Expected label node to be a React element.");
    }

    const labelElement = labelNode as ReactElement<{
      children?: ReactNode;
      variant?: string;
    }>;
    expect(labelElement.props.variant).toBe("subheadline2-semibold");
    expect(labelElement.props.children).toBe("99+");
  });

  it("renders dot badge without text content", () => {
    const element = Badge({
      size: "dot",
      variant: "critical",
    });

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);

    const dotNode = children[0];
    expect(isValidElement(dotNode)).toBe(true);
    if (!isValidElement(dotNode)) {
      throw new Error("Expected dot node to be a React element.");
    }
  });
});
