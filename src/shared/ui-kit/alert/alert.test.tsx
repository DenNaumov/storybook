import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { jest } from "@jest/globals";

jest.mock("../illustration/illustration", () => ({
  Illustration: ({ illustration }: { illustration: string }) => (
    <div data-illustration={illustration} data-testid="alert-illustration" />
  ),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Alert } = require("./alert") as typeof import("./alert");

describe("Alert", () => {
  it("renders title, description and primary action", () => {
    const onPrimaryAction = jest.fn();

    render(
      <Alert
        title="Title"
        description="Description"
        primaryActionLabel="Save"
        onPrimaryAction={onPrimaryAction}
      />,
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
  });

  it("renders illustration before the text content when provided", () => {
    const { container } = render(
      <Alert title="Title" illustration="UserLimit" />,
    );

    const alert = container.querySelector("section");

    expect(alert).not.toBeNull();
    expect(screen.getByTestId("alert-illustration")).toHaveAttribute(
      "data-illustration",
      "UserLimit",
    );

    const alertChildren = Array.from(alert?.children ?? []);
    const illustrationNode = screen.getByTestId("alert-illustration");
    const titleNode = screen.getByText("Title");

    expect(alertChildren[0]).toContainElement(illustrationNode);
    expect(alertChildren[1]).toContainElement(titleNode);
  });

  it("renders two actions when secondary action is provided", () => {
    const onPrimaryAction = jest.fn();
    const onSecondaryAction = jest.fn();

    render(
      <Alert
        title="Title"
        primaryActionLabel="Primary"
        secondaryActionLabel="Secondary"
        actionsLayout="inline"
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
      />,
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(within(buttons[0]).getByText("Secondary")).toBeInTheDocument();
    expect(within(buttons[1]).getByText("Primary")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Secondary" }));
    fireEvent.click(screen.getByRole("button", { name: "Primary" }));

    expect(onSecondaryAction).toHaveBeenCalledTimes(1);
    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
  });
});
