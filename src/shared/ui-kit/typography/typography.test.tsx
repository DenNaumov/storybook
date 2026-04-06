import { describe, it } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Typography } from "./typography";

describe("Typography", () => {
  it("renders span by default", () => {
    render(<Typography variant="text-regular">Hello</Typography>);

    const element = screen.getByText("Hello");

    expect(element.tagName.toLowerCase()).toBe("span");
  });

  it("maps theme text color tokens to CSS variables", () => {
    render(
      <Typography variant="caption1-regular" color="brandMain">
        Token color
      </Typography>,
    );

    const element = screen.getByText("Token color");

    expect(element).toHaveStyle({ color: "var(--theme-text-brand-main)" });
  });

  it("applies provided className", () => {
    render(
      <Typography
        variant="headline-semibold"
        align="center"
        className="custom-class"
      >
        Centered
      </Typography>,
    );

    const element = screen.getByText("Centered");

    expect(element.className).toContain("custom-class");
  });

  it("respects the as prop", () => {
    render(
      <Typography as="label" variant="subheadline2-semibold">
        Label
      </Typography>,
    );

    const element = screen.getByText("Label");

    expect(element.tagName.toLowerCase()).toBe("label");
  });
});
