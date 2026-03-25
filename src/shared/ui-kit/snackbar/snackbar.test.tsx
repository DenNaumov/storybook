import { Children, isValidElement } from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { Snackbar } from "./snackbar";

describe("Snackbar", () => {
  it("renders a plain message without controls by default", () => {
    const element = Snackbar({
      message: "Body",
    });

    expect(isValidElement(element)).toBe(true);
    expect(element.props.role).toBe("status");
    expect(element.props["aria-live"]).toBe("polite");

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(1);
  });

  it("renders action and dismiss controls when callbacks are provided", () => {
    const onAction = jest.fn();
    const onDismiss = jest.fn();

    const element = Snackbar({
      variant: "error",
      message: "Body",
      actionLabel: "Отменить",
      onAction,
      onDismiss,
    });

    expect(element.props.role).toBe("alert");
    expect(element.props["aria-live"]).toBe("assertive");

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(2);

    const controlsNode = children[1];
    expect(isValidElement(controlsNode)).toBe(true);
    if (!isValidElement(controlsNode)) {
      throw new Error("Expected controls node to be a React element.");
    }

    const controlsChildren = Children.toArray(controlsNode.props.children);
    expect(controlsChildren).toHaveLength(2);

    const actionButton = controlsChildren[0];
    const dismissButton = controlsChildren[1];

    expect(isValidElement(actionButton)).toBe(true);
    expect(isValidElement(dismissButton)).toBe(true);

    if (!isValidElement(actionButton) || !isValidElement(dismissButton)) {
      throw new Error("Expected control buttons to be React elements.");
    }

    expect(actionButton.props.onClick).toBe(onAction);

    const dismissChildren = Children.toArray(dismissButton.props.children);
    expect(dismissChildren).toHaveLength(1);

    const dismissIconButton = dismissChildren[0];
    expect(isValidElement(dismissIconButton)).toBe(true);
    if (!isValidElement(dismissIconButton)) {
      throw new Error("Expected dismiss icon button to be a React element.");
    }

    expect(dismissIconButton.props.onClick).toBe(onDismiss);
  });

  it("omits the variant icon when hideIcon is enabled", () => {
    const element = Snackbar({
      variant: "success",
      message: "Saved",
      hideIcon: true,
    });

    const children = Children.toArray(element.props.children);
    const contentNode = children[0];

    expect(isValidElement(contentNode)).toBe(true);
    if (!isValidElement(contentNode)) {
      throw new Error("Expected content node to be a React element.");
    }

    const contentChildren = Children.toArray(contentNode.props.children);
    expect(contentChildren).toHaveLength(1);
    expect(contentChildren[0]).toBeDefined();
  });
});
