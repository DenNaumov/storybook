import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import type { SVGProps } from "react";

jest.mock("../icon", () => ({
  Icon24Icons: {
    ChevronRight: (props: SVGProps<SVGSVGElement>) => <svg {...props} />,
    Cancel: (props: SVGProps<SVGSVGElement>) => <svg {...props} />,
  },
  ResizableIcons: {
    Calculate: (props: SVGProps<SVGSVGElement>) => <svg {...props} />,
  },
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { CrmSelect } = require("./crm-select") as typeof import("./crm-select");

describe("CrmSelect", () => {
  it("renders label as placeholder when value is empty", () => {
    render(<CrmSelect value={null} onValueChange={jest.fn()} />);

    expect(
      screen.getByRole("combobox", { name: "Label" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("opens select from the input and action button", () => {
    const onOpen = jest.fn();

    render(<CrmSelect value={null} onValueChange={jest.fn()} onOpen={onOpen} />);

    fireEvent.click(screen.getByRole("combobox", { name: "Label" }));
    fireEvent.click(screen.getByRole("button", { name: "Открыть список" }));

    expect(onOpen).toHaveBeenCalledTimes(2);
  });

  it("does not focus input", () => {
    render(
      <CrmSelect value={null} onValueChange={jest.fn()} onOpen={jest.fn()} />,
    );

    const select = screen.getByRole("combobox", { name: "Label" });

    fireEvent.mouseDown(select);
    fireEvent.focus(select);

    expect(select).not.toHaveFocus();
    expect(select).toHaveAttribute("tabindex", "-1");
  });

  it("clears selected value", () => {
    const onValueChange = jest.fn();

    render(<CrmSelect value="Value" onValueChange={onValueChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Очистить" }));

    expect(onValueChange).toHaveBeenCalledWith(null);
  });

  it("renders calculator action when requested", () => {
    render(
      <CrmSelect
        value="Value"
        onValueChange={jest.fn()}
        showCalculatorIcon
      />,
    );

    expect(
      screen.getByRole("button", { name: "Открыть калькулятор" }),
    ).toBeInTheDocument();
  });

  it("does not open when disabled", () => {
    const onOpen = jest.fn();

    render(
      <CrmSelect
        value={null}
        onValueChange={jest.fn()}
        onOpen={onOpen}
        disabled
      />,
    );

    fireEvent.click(screen.getByRole("combobox", { name: "Label" }));

    expect(screen.getByRole("combobox", { name: "Label" })).toBeDisabled();
    expect(onOpen).not.toHaveBeenCalled();
  });
});
