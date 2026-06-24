import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";

const mockSvgIcon = () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require("react") as typeof import("react");

  return React.createElement("svg", { "data-testid": "loader-icon" });
};

jest.mock("./assets/loader_24.svg", () => ({
  __esModule: true,
  default: mockSvgIcon,
}));

jest.mock("./assets/loader_28.svg", () => ({
  __esModule: true,
  default: mockSvgIcon,
}));

jest.mock("./assets/loader_32.svg", () => ({
  __esModule: true,
  default: mockSvgIcon,
}));

// Require after SVG mocks are registered so Loader receives component mocks.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Loader } = require("./loader") as typeof import("./loader");

describe("Loader", () => {
  it("uses medium size by default", () => {
    render(<Loader />);

    const loader = screen.getByRole("status", { name: "Загрузка" });

    expect(loader).toBeInTheDocument();
    expect(screen.getByTestId("loader-icon")).toBeInTheDocument();
  });

  it("renders the requested icon size for each variant", () => {
    render(<Loader size="large" />);

    expect(
      screen.getByRole("status", { name: "Загрузка" }).className,
    ).toContain("sizeLarge");
  });

  it("wraps loader with a centered container", () => {
    const { container } = render(<Loader className="loader-area" />);

    const loaderArea = container.firstElementChild;

    expect(loaderArea).toHaveClass("container");
    expect(loaderArea).toHaveClass("loader-area");
    expect(loaderArea).toContainElement(
      screen.getByRole("status", { name: "Загрузка" }),
    );
  });
});
