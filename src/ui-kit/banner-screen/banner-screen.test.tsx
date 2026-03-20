import { Children, isValidElement } from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { BannerScreen } from "./banner-screen";

describe("BannerScreen", () => {
  it("renders illustration, text and action", () => {
    const onAction = jest.fn();
    const element = BannerScreen({
      title: "Список пуст",
      description: "В списке нет значений",
      media: "banner-media",
      actionLabel: "Создать",
      onAction,
    });

    expect(isValidElement(element)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(3);

    const actionNode = children[2];
    expect(isValidElement(actionNode)).toBe(true);
    if (!isValidElement(actionNode)) {
      throw new Error("Expected action wrapper to be a React element.");
    }

    const actionButton = Children.toArray(actionNode.props.children)[0];
    expect(isValidElement(actionButton)).toBe(true);
    if (!isValidElement(actionButton)) {
      throw new Error("Expected action button to be a React element.");
    }

    expect(actionButton.props.onClick).toBe(onAction);
    expect(actionButton.props.label).toBe("Создать");
  });

  it("renders custom media when provided", () => {
    const element = BannerScreen({
      title: "Список пуст",
      media: "custom-media",
    });

    const children = Children.toArray(element.props.children);
    const mediaNode = children[0];

    expect(isValidElement(mediaNode)).toBe(true);
    if (!isValidElement(mediaNode)) {
      throw new Error("Expected media node to be a React element.");
    }

    expect(mediaNode.props.children).toBe("custom-media");
  });
});
