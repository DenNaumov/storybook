import { describe, expect, it, jest } from "@jest/globals";
import { isValidElement } from "react";

const MockIcon = () => null;
jest.mock("./loader_24.svg", () => ({
  __esModule: true,
  default: MockIcon,
  ReactComponent: MockIcon,
}));
jest.mock("./loader_28.svg", () => ({
  __esModule: true,
  default: MockIcon,
  ReactComponent: MockIcon,
}));
jest.mock("./loader_32.svg", () => ({
  __esModule: true,
  default: MockIcon,
  ReactComponent: MockIcon,
}));

import { Loader } from "./loader";

describe("Loader", () => {
  it("uses medium size by default", () => {
    const element = Loader({});

    expect(isValidElement(element)).toBe(true);
    expect(element.props.role).toBe("status");
    expect(element.props["aria-label"]).toBe("Загрузка");
  });

  it("renders the requested icon size for each variant", () => {
    const element = Loader({ size: "large" });

    expect(isValidElement(element)).toBe(true);
    expect(element.props.className).toContain("sizeLarge");
  });
});
