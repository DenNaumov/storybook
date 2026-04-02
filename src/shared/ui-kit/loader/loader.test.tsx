import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { isValidElement } from "react";

// Using a factory that returns a component or an object that matches resolveSvgComponent expectations.
const MockIcon = () => null;
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
    jest.doMock(
      "../icon/icon-wrappers",
      () => ({
        resolveSvgComponent: (component: typeof MockIcon) => component,
      }),
      { virtual: true },
    );
  });

  it("uses medium size by default", () => {
    // Require inside the test to ensure mocks are applied
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Loader } = require("./loader");
    const element = Loader({});

    expect(isValidElement(element)).toBe(true);
    expect(element.props.role).toBe("status");
    expect(element.props["aria-label"]).toBe("Загрузка");
  });

  it("renders the requested icon size for each variant", () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Loader } = require("./loader");
    const element = Loader({ size: "large" });

    expect(isValidElement(element)).toBe(true);
    expect(element.props.className).toContain("sizeLarge");
  });
});
