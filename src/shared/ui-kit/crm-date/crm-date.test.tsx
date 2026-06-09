import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import type { SVGProps } from "react";

jest.mock("../icon", () => ({
  Icon24Icons: {
    Calendar: (props: SVGProps<SVGSVGElement>) => <svg {...props} />,
  },
  ResizableIcons: {
    Calculate: (props: SVGProps<SVGSVGElement>) => <svg {...props} />,
  },
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { CrmDate } = require("./crm-date") as typeof import("./crm-date");

describe("CrmDate", () => {
  it("renders date input with placeholder", () => {
    render(<CrmDate value="" onValueChange={jest.fn()} />);

    expect(screen.getByRole("textbox", { name: "Label" })).toBeInTheDocument();
    expect(screen.getByText("Label_placeholder")).toBeInTheDocument();
  });

  it("notifies about value changes", () => {
    const onValueChange = jest.fn();

    render(<CrmDate value="" onValueChange={onValueChange} />);

    fireEvent.change(screen.getByRole("textbox", { name: "Label" }), {
      target: { value: "09.09.2029" },
    });

    expect(onValueChange).toHaveBeenCalledWith("09.09.2029");
  });

  it("opens calendar from action button", () => {
    const onOpen = jest.fn();

    render(<CrmDate value="" onValueChange={jest.fn()} onOpen={onOpen} />);

    fireEvent.click(screen.getByRole("button", { name: "Открыть календарь" }));

    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("renders calculator action when requested", () => {
    render(
      <CrmDate
        value="09.09.2029 22:22"
        onValueChange={jest.fn()}
        showCalculatorIcon
      />,
    );

    expect(
      screen.getByRole("button", { name: "Открыть калькулятор" }),
    ).toBeInTheDocument();
  });

  it("disables input and actions", () => {
    const onOpen = jest.fn();

    render(
      <CrmDate
        value=""
        onValueChange={jest.fn()}
        onOpen={onOpen}
        disabled
      />,
    );

    expect(screen.getByRole("textbox", { name: "Label" })).toBeDisabled();
    expect(
      screen.getByRole("button", { name: "Открыть календарь" }),
    ).toBeDisabled();

    fireEvent.click(screen.getByRole("button", { name: "Открыть календарь" }));

    expect(onOpen).not.toHaveBeenCalled();
  });
});
