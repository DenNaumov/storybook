import type { ReactElement, SVGProps } from "react";
import { isValidElement } from "react";
import { describe, expect, it, jest } from "@jest/globals";

import {
  resolveSvgComponent,
} from "./icon-wrappers";

type SvgIconElement = ReactElement<SVGProps<SVGSVGElement>>;

describe("resolveSvgComponent", () => {
  it("returns a plain component as-is", () => {
    const svgComponent = () => null;

    expect(resolveSvgComponent(svgComponent)).toBe(svgComponent);
  });

  it("returns a default-exported component", () => {
    const svgComponent = () => null;

    expect(resolveSvgComponent({ default: svgComponent })).toBe(svgComponent);
  });

  it("returns a ReactComponent export", () => {
    const svgComponent = () => null;

    expect(resolveSvgComponent({ ReactComponent: svgComponent })).toBe(svgComponent);
  });

  it("throws on an unsupported SVG module", () => {
    expect(() => resolveSvgComponent({})).toThrow("Invalid SVG icon module.");
  });
});

describe("icon wrappers", () => {
  it("renders a resizable icon with merged size and style props", async () => {
    jest.resetModules();

    let element: SvgIconElement | undefined;

    await jest.isolateModulesAsync(async () => {
      const fakeSvgResizable = (props: Record<string, unknown>) => props;

      jest.doMock("./packs/resizable", () => ({
        ResizableIcons: {
          Add01: fakeSvgResizable,
        },
      }));

      const { ResizableIcon } = await import("./icon-wrappers");
      element = ResizableIcon({
        icon: "Add01",
        size: 32,
        color: "#2990FF",
        style: { opacity: 0.5 },
      });
    });

    expect(isValidElement(element)).toBe(true);
    if (!element) {
      throw new Error("Expected resizable icon element to be defined.");
    }
    expect(element.props.width).toBe(32);
    expect(element.props.height).toBe(32);
    expect(element.props.color).toBe("#2990FF");
    expect(element.props.style).toEqual({ width: 32, height: 32, opacity: 0.5 });
  });

  it("renders fixed-size pack icons with the provided size", async () => {
    jest.resetModules();

    let icon16: SvgIconElement | undefined;
    let icon20: SvgIconElement | undefined;
    let icon24: SvgIconElement | undefined;
    let icon28: SvgIconElement | undefined;

    await jest.isolateModulesAsync(async () => {
      const fakeSvg16 = (props: Record<string, unknown>) => props;
      const fakeSvg20 = (props: Record<string, unknown>) => props;
      const fakeSvg24 = (props: Record<string, unknown>) => props;
      const fakeSvg28 = (props: Record<string, unknown>) => props;

      jest.doMock("./packs/16", () => ({
        Icon16Icons: {
          Check: fakeSvg16,
        },
      }));

      jest.doMock("./packs/20", () => ({
        Icon20Icons: {
          Search: fakeSvg20,
        },
      }));

      jest.doMock("./packs/24", () => ({
        Icon24Icons: {
          Notifications: fakeSvg24,
        },
      }));

      jest.doMock("./packs/28", () => ({
        Icon28Icons: {
          PersonAdd: fakeSvg28,
        },
      }));

      const { Icon16, Icon20, Icon24, Icon28 } = await import("./icon-wrappers");

      icon16 = Icon16({ icon: "Check", size: 18 });
      icon20 = Icon20({ icon: "Search", size: 22 });
      icon24 = Icon24({ icon: "Notifications", size: 30 });
      icon28 = Icon28({ icon: "PersonAdd", size: 34 });
    });

    expect(isValidElement(icon16)).toBe(true);
    if (!icon16) {
      throw new Error("Expected Icon16 element to be defined.");
    }
    expect(icon16.props.width).toBe(18);
    expect(icon16.props.height).toBe(18);

    expect(isValidElement(icon20)).toBe(true);
    if (!icon20) {
      throw new Error("Expected Icon20 element to be defined.");
    }
    expect(icon20.props.width).toBe(22);
    expect(icon20.props.height).toBe(22);

    expect(isValidElement(icon24)).toBe(true);
    if (!icon24) {
      throw new Error("Expected Icon24 element to be defined.");
    }
    expect(icon24.props.width).toBe(30);
    expect(icon24.props.height).toBe(30);

    expect(isValidElement(icon28)).toBe(true);
    if (!icon28) {
      throw new Error("Expected Icon28 element to be defined.");
    }
    expect(icon28.props.width).toBe(34);
    expect(icon28.props.height).toBe(34);
  });
});
