import type { ReactElement, ReactNode } from "react";
import { isValidElement } from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { BannerScreen } from "./banner-screen";

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;
type ActionElement = ReactElement<{ onClick?: unknown; label?: string }>;

describe("BannerScreen", () => {
  it("renders media, text and action", () => {
    const onAction = jest.fn();
    const element = BannerScreen({
      title: "Список пуст",
      description: "В списке нет значений",
      media: "banner-media",
      actionLabel: "Создать",
      onAction,
    });

    expect(isValidElement(element)).toBe(true);
    const children = element.props.children;
    expect(children).toHaveLength(3);

    const actionNode = children[2];
    expect(isValidElement(actionNode)).toBe(true);
    if (!isValidElement(actionNode)) {
      throw new Error("Expected action wrapper to be a React element.");
    }

    const actionButton = (actionNode as ElementWithChildren).props.children;
    expect(isValidElement(actionButton)).toBe(true);
    if (!isValidElement(actionButton)) {
      throw new Error("Expected action button to be a React element.");
    }

    expect((actionButton as ActionElement).props.onClick).toBe(onAction);
    expect((actionButton as ActionElement).props.label).toBe("Создать");
  });

  it("passes through custom className and media", () => {
    const element = BannerScreen({
      title: "Список пуст",
      media: "custom-media",
      className: "custom-banner-screen",
    });

    expect(isValidElement(element)).toBe(true);
    expect(element.props.className).toContain("custom-banner-screen");
    expect(
      (element.props.children[0] as ElementWithChildren).props.children,
    ).toBe("custom-media");
  });
});
