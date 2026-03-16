import { describe, expect, it } from "@jest/globals";

import { ButtonGroup } from "./button-group";

describe("ButtonGroup", () => {
  it("renders with children and a generated className by default", () => {
    const element = ButtonGroup({
      children: "content",
    });

    expect(typeof element.props.className).toBe("string");
    expect(element.props.className.length).toBeGreaterThan(0);
    expect(element.props.children).toBe("content");
  });

  it("applies spacing and custom className", () => {
    const element = ButtonGroup({
      children: "content",
      withSpacing: true,
      className: "custom-group",
    });

    expect(element.props.className).toContain("custom-group");
  });

  it("changes the generated className when direction and gap props change", () => {
    const defaultElement = ButtonGroup({
      children: "content",
    });

    const inlineElement = ButtonGroup({
      children: "content",
      direction: "inline",
      gap: 0,
    });

    const chipsElement = ButtonGroup({
      children: "content",
      direction: "chips",
      gap: 0,
    });

    expect(inlineElement.props.className).not.toBe(defaultElement.props.className);
    expect(chipsElement.props.className).not.toBe(defaultElement.props.className);
  });

  it("renders horizontal direction and passes through extra props", () => {
    const element = ButtonGroup({
      children: "content",
      direction: "horizontal",
      id: "group-id",
    });

    expect(typeof element.props.className).toBe("string");
    expect(element.props.id).toBe("group-id");
    expect(element.props.children).toBe("content");
  });
});
