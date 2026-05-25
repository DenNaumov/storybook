import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { jest } from "@jest/globals";

jest.mock("../icon", () => ({
  Icon20Icons: {
    ChevronDown: () => <span data-testid="chevron-down" />,
    ChevronUp: () => <span data-testid="chevron-up" />,
  },
  ResizableIcons: {
    InformationCircle: () => <span data-testid="information-circle" />,
  },
}));

const bannerListModule =
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./banner-list") as typeof import("./banner-list");
const { BannerList } = bannerListModule;

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

    expect(screen.getByText("Произошла ошибка")).toBeInTheDocument();
    expect(
      screen.getByText("Некорректно заполнены поля объекта"),
    ).toBeInTheDocument();
    expect(screen.getByText("Подробности")).toBeInTheDocument();

    const toggle = screen.getByRole("button", {
      name: "Переключить баннер",
    });

    expect(toggle).toHaveAttribute("aria-expanded", "true");

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

    expect(screen.getByText("Произошла ошибка")).toBeInTheDocument();
    expect(screen.queryByText("Подробности")).not.toBeInTheDocument();
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

    expect(screen.getByText("Произошла ошибка")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Переключить баннер" }),
    ).not.toBeInTheDocument();
    expect(onToggle).not.toHaveBeenCalled();
  });
});
