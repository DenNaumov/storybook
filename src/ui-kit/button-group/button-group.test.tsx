import { describe, expect, it } from "@jest/globals";

import { ButtonGroup } from "./button-group";

describe("ButtonGroup", () => {
  it("renders children by default", () => {
    const element = ButtonGroup({
      children: "content",
    });

    expect(element.props.children).toBe("content");
  });

  it("passes through custom props", () => {
    const element = ButtonGroup({
      children: "content",
      withSpacing: true,
      className: "custom-group",
      id: "group-id",
      "data-gap": "12",
    });

    expect(element.props.id).toBe("group-id");
    expect(element.props["data-gap"]).toBe("12");
    expect(element.props.children).toBe("content");
  });

  it("supports different layout props", () => {
    const element = ButtonGroup({
      children: "content",
      direction: "horizontalFixed",
      gap: 0,
    });

    expect(element.props.children).toBe("content");
  });

  it("renders horizontal direction and passes through extra props", () => {
    const element = ButtonGroup({
      children: "content",
      direction: "horizontal",
      id: "group-id",
    });

    expect(element.props.id).toBe("group-id");
    expect(element.props.children).toBe("content");
  });
});
