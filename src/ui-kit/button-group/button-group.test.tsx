import { describe, expect, it } from "@jest/globals";

import styles from "./button-group.module.css";
import { ButtonGroup } from "./button-group";

const getClassNames = (className?: string) =>
  new Set((className ?? "").split(" ").filter(Boolean));

describe("ButtonGroup", () => {
  it("uses vertical direction and default gap by default", () => {
    const element = ButtonGroup({
      children: "content",
    });

    const classes = getClassNames(element.props.className);

    expect(classes.has(styles.buttonGroup)).toBe(true);
    expect(classes.has(styles.vertical)).toBe(true);
    expect(classes.has(styles.gap12)).toBe(true);
  });

  it("applies spacing and custom className", () => {
    const element = ButtonGroup({
      children: "content",
      withSpacing: true,
      className: "custom-group",
    });

    const classes = getClassNames(element.props.className);

    expect(classes.has(styles.withSpacing)).toBe(true);
    expect(classes.has("custom-group")).toBe(true);
  });

  it("renders inline and chips directions with the proper layout classes", () => {
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

    const inlineClasses = getClassNames(inlineElement.props.className);
    const chipsClasses = getClassNames(chipsElement.props.className);

    expect(inlineClasses.has(styles.inlineHorizontal)).toBe(true);
    expect(inlineClasses.has(styles.gap12)).toBe(false);

    expect(chipsClasses.has(styles.chipsHorizontal)).toBe(true);
    expect(chipsClasses.has(styles.gap12)).toBe(false);
  });

  it("renders horizontal direction and passes through extra props", () => {
    const element = ButtonGroup({
      children: "content",
      direction: "horizontal",
      id: "group-id",
    });

    const classes = getClassNames(element.props.className);

    expect(classes.has(styles.horizontal)).toBe(true);
    expect(element.props.id).toBe("group-id");
    expect(element.props.children).toBe("content");
  });
});
