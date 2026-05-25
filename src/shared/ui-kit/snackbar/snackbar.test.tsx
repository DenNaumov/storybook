import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";

const MockSvg = () => <svg data-testid="snackbar-icon" />;

jest.mock("../icon", () => ({
  Icon20Icons: {
    Cancel: MockSvg,
  },
  Icon28Icons: {
    Check: MockSvg,
    Warning: MockSvg,
  },
}));

const { Snackbar } =
  jest.requireActual<typeof import("./snackbar")>("./snackbar");

describe("Snackbar", () => {
  it("renders a plain message without controls by default", () => {
    render(<Snackbar message="Body" />);

    const snackbar = screen.getByRole("status");

    expect(snackbar.getAttribute("aria-live")).toBe("polite");
    expect(screen.getByText("Body")).toBeDefined();
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("renders action and dismiss controls when callbacks are provided", () => {
    const onAction = jest.fn();
    const onDismiss = jest.fn();

    render(
      <Snackbar
        variant="error"
        message="Body"
        actionLabel="Отменить"
        onAction={onAction}
        onDismiss={onDismiss}
      />,
    );

    const snackbar = screen.getByRole("alert");

    expect(snackbar.getAttribute("aria-live")).toBe("assertive");

    fireEvent.click(screen.getByRole("button", { name: "Отменить" }));
    fireEvent.click(
      screen.getByRole("button", { name: "Закрыть уведомление" }),
    );

    expect(onAction).toHaveBeenCalledTimes(1);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("omits the variant icon when hideIcon is enabled", () => {
    const { container } = render(
      <Snackbar variant="success" message="Saved" hideIcon />,
    );

    expect(screen.getByText("Saved")).toBeDefined();
    expect(container.querySelector("svg")).toBeNull();
  });
});
