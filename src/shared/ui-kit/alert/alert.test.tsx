import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { Alert } from "./alert";

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;
type ClickableElement = ReactElement<{
  onClick?: unknown;
  children?: ReactNode;
}>;

describe("Alert", () => {
  it("renders title, description and primary action", () => {
    const onPrimaryAction = jest.fn();
    const element = Alert({
      title: "Title",
      description: "Description",
      primaryActionLabel: "Save",
      onPrimaryAction,
    });

    expect(isValidElement(element)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(2);

    const bodyNode = children[0];
    const actionsNode = children[1];

    expect(isValidElement(bodyNode)).toBe(true);
    expect(isValidElement(actionsNode)).toBe(true);

    if (!isValidElement(bodyNode) || !isValidElement(actionsNode)) {
      throw new Error("Expected alert body and actions to be React elements.");
    }

    const bodyChildren = Children.toArray(
      (bodyNode as ElementWithChildren).props.children,
    );
    expect(bodyChildren).toHaveLength(2);

    const actionsChildren = Children.toArray(
      (actionsNode as ElementWithChildren).props.children,
    );
    expect(actionsChildren).toHaveLength(1);

    const primarySlot = actionsChildren[0];
    expect(isValidElement(primarySlot)).toBe(true);
    if (!isValidElement(primarySlot)) {
      throw new Error("Expected primary action slot to be a React element.");
    }

    const primaryButton = Children.toArray(
      (primarySlot as ElementWithChildren).props.children,
    )[0];
    expect(isValidElement(primaryButton)).toBe(true);
    if (!isValidElement(primaryButton)) {
      throw new Error("Expected primary button to be a React element.");
    }

    expect((primaryButton as ClickableElement).props.onClick).toBe(
      onPrimaryAction,
    );
  });

  it("renders media before the text content when provided", () => {
    const element = Alert({
      title: "Title",
      media: "media",
    });

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(2);

    const mediaNode = children[0];
    expect(isValidElement(mediaNode)).toBe(true);
    if (!isValidElement(mediaNode)) {
      throw new Error("Expected media node to be a React element.");
    }

    expect((mediaNode as ElementWithChildren).props.children).toBe("media");
  });

  it("renders two actions when secondary action is provided", () => {
    const element = Alert({
      title: "Title",
      primaryActionLabel: "Primary",
      secondaryActionLabel: "Secondary",
      actionsLayout: "inline",
    });

    const children = Children.toArray(element.props.children);
    const actionsNode = children[1];

    expect(isValidElement(actionsNode)).toBe(true);
    if (!isValidElement(actionsNode)) {
      throw new Error("Expected actions node to be a React element.");
    }

    const actionsChildren = Children.toArray(
      (actionsNode as ElementWithChildren).props.children,
    );
    expect(actionsChildren).toHaveLength(2);
  });
});
