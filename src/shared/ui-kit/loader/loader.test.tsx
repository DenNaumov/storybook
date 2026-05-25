import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, jest, beforeEach } from "@jest/globals";

const MockIcon = () => <svg data-testid="loader-icon" />;
const resolveSvgPath = (fileName: string) =>
  require.resolve(`./assets/${fileName}`);

describe("Loader", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock(
      resolveSvgPath("loader_24.svg"),
      () => ({
        __esModule: true,
        default: MockIcon,
      }),
      { virtual: true },
    );
    jest.doMock(
      resolveSvgPath("loader_28.svg"),
      () => ({
        __esModule: true,
        default: MockIcon,
      }),
      { virtual: true },
    );
    jest.doMock(
      resolveSvgPath("loader_32.svg"),
      () => ({
        __esModule: true,
        default: MockIcon,
      }),
      { virtual: true },
    );
  });

  it("uses medium size by default", () => {
    // Require inside the test to ensure mocks are applied
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Loader } = require("./loader") as typeof import("./loader");

    render(<Loader />);

    const loader = screen.getByRole("status", { name: "Загрузка" });

    expect(loader).toBeInTheDocument();
    expect(screen.getByTestId("loader-icon")).toBeInTheDocument();
  });

  it("renders the requested icon size for each variant", () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Loader } = require("./loader") as typeof import("./loader");

    render(<Loader size="large" />);

    expect(screen.getByRole("status", { name: "Загрузка" }).className).toContain(
      "sizeLarge",
    );
  });
});
