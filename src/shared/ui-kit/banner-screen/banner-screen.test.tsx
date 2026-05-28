import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";

jest.mock("../illustration/illustration", () => ({
  Illustration: ({ illustration }: { illustration: string }) => (
    <div data-illustration={illustration} data-testid="banner-illustration" />
  ),
}));

const { BannerScreen } =
  jest.requireActual<typeof import("./banner-screen")>("./banner-screen");

describe("BannerScreen", () => {
  it("renders illustration, text and action", () => {
    const onAction = jest.fn();

    render(
      <BannerScreen
        title="Список пуст"
        description="В списке нет значений"
        illustration="EmptyListNoAdd"
        actionLabel="Создать"
        onAction={onAction}
      />,
    );

    expect(
      screen
        .getByTestId("banner-illustration")
        .getAttribute("data-illustration"),
    ).toBe("EmptyListNoAdd");
    expect(screen.getByRole("heading", { name: "Список пуст" })).toBeDefined();
    expect(screen.getByText("В списке нет значений")).toBeDefined();

    fireEvent.click(screen.getByRole("button", { name: "Создать" }));

    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("passes through custom className and illustration", () => {
    const { container } = render(
      <BannerScreen
        title="Список пуст"
        illustration="EmptyListNoAdd"
        className="custom-banner-screen"
      />,
    );

    expect(container.querySelector("section")?.className).toContain(
      "custom-banner-screen",
    );
    expect(
      screen
        .getByTestId("banner-illustration")
        .getAttribute("data-illustration"),
    ).toBe("EmptyListNoAdd");
  });
});
