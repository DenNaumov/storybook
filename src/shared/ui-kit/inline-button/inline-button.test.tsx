import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";

import { InlineButton } from "./inline-button";

describe("InlineButton", () => {
  it("renders the surface variant by default", () => {
    render(<InlineButton icon="icon" label="Reset" />);

    expect(screen.getByRole("button", { name: "icon Reset" })).toBeEnabled();
  });

  it("renders icon and label in order", () => {
    render(<InlineButton variant="primary" icon="calendar" label="Reset" />);

    const button = screen.getByRole("button", { name: "calendar Reset" });

    expect(within(button).getByText("calendar")).toBeInTheDocument();
    expect(within(button).getByText("Reset")).toBeInTheDocument();
    expect(button).toHaveTextContent("calendarReset");
  });

  it("applies disabled state", () => {
    render(
      <InlineButton variant="bezeled" icon="calendar" label="Reset" disabled />,
    );

    expect(
      screen.getByRole("button", { name: "calendar Reset" }),
    ).toBeDisabled();
  });
});
