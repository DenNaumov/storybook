import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";

const SvgMock = () => <svg />;

jest.mock("../icon/packs/20/chevron_down_20.svg", () => ({
  __esModule: true,
  default: SvgMock,
}));

jest.mock("../icon/packs/20/chevron_up_20.svg", () => ({
  __esModule: true,
  default: SvgMock,
}));

jest.mock("../icon/packs/resizable/information-circle.svg", () => ({
  __esModule: true,
  default: SvgMock,
}));

const { BannerList } =
  jest.requireActual<typeof import("./banner-list")>("./banner-list");

describe("BannerList", () => {
  it("renders toggle button when banner is collapsible", () => {
    const onToggle = jest.fn();

    render(
      <BannerList
        title="Произошла ошибка"
        description="Некорректно заполнены поля объекта"
        details="Подробности"
        expanded
        onToggle={onToggle}
      />,
    );

    expect(screen.getByText("Произошла ошибка")).toBeDefined();
    expect(
      screen.getByText("Некорректно заполнены поля объекта"),
    ).toBeDefined();
    expect(screen.getByText("Подробности")).toBeDefined();

    const toggle = screen.getByRole("button", {
      name: "Переключить баннер",
    });

    expect(toggle.getAttribute("aria-expanded")).toBe("true");

    fireEvent.click(toggle);

    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("does not render details when collapsed", () => {
    render(
      <BannerList
        title="Произошла ошибка"
        description="Некорректно заполнены поля объекта"
        details="Подробности"
        expanded={false}
        collapsible
      />,
    );

    expect(screen.getByText("Произошла ошибка")).toBeDefined();
    expect(screen.queryByText("Подробности")).toBeNull();
  });

  it("renders static header when details are empty", () => {
    const onToggle = jest.fn();

    render(
      <BannerList
        title="Произошла ошибка"
        description="Некорректно заполнены поля объекта"
        details=""
        expanded
        collapsible
        onToggle={onToggle}
      />,
    );

    expect(screen.getByText("Произошла ошибка")).toBeDefined();
    expect(
      screen.queryByRole("button", { name: "Переключить баннер" }),
    ).toBeNull();
    expect(onToggle).not.toHaveBeenCalled();
  });
});
