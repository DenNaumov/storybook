import type { ReactElement } from "react";
import { Children, isValidElement } from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { BannerList } from "./banner-list";

type HeaderElement = ReactElement<{
  type?: string;
  onClick?: unknown;
  "aria-expanded"?: boolean;
}>;

describe("BannerList", () => {
  it("renders toggle button when banner is collapsible", () => {
    const onToggle = jest.fn();
    const element = BannerList({
      title: "Произошла ошибка",
      description: "Некорректно заполнены поля объекта",
      details: "Подробности",
      expanded: true,
      onToggle,
    });

    expect(isValidElement(element)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(2);

    const headerNode = children[0];
    expect(isValidElement(headerNode)).toBe(true);
    if (!isValidElement(headerNode)) {
      throw new Error("Expected header node to be a React element.");
    }

    expect((headerNode as HeaderElement).props.type).toBe("button");
    expect((headerNode as HeaderElement).props["aria-expanded"]).toBe(true);
    expect((headerNode as HeaderElement).props.onClick).toBe(onToggle);
  });

  it("does not render details when collapsed", () => {
    const element = BannerList({
      title: "Произошла ошибка",
      description: "Некорректно заполнены поля объекта",
      details: "Подробности",
      expanded: false,
      collapsible: true,
    });

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);
  });
});
