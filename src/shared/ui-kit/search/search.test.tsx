import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import type { SVGProps } from "react";

jest.mock("../icon", () => ({
  Icon24Icons: {
    Cancel: (props: SVGProps<SVGSVGElement>) => <svg {...props} />,
  },
  Icon20Icons: {
    Search: (props: SVGProps<SVGSVGElement>) => <svg {...props} />,
  },
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Search } = require("./search") as typeof import("./search");

describe("Search", () => {
  it("renders search input with default accessible name", () => {
    render(<Search value="" onValueChange={jest.fn()} />);

    expect(screen.getByRole("searchbox", { name: "Поиск" })).toHaveAttribute(
      "placeholder",
      "Поиск",
    );
  });

  it("notifies about value changes", () => {
    const onChange = jest.fn();

    render(<Search value="" onValueChange={onChange} />);

    fireEvent.change(screen.getByRole("searchbox", { name: "Поиск" }), {
      target: { value: "Value" },
    });

    expect(onChange).toHaveBeenCalledWith("Value");
  });

  it("clears value on clear button click", () => {
    const onChange = jest.fn();

    render(<Search value="Value" onValueChange={onChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Очистить" }));

    expect(onChange).toHaveBeenCalledWith("");
  });

  it("hides clear button when disabled", () => {
    render(<Search value="Value" onValueChange={jest.fn()} disabled />);

    expect(screen.getByRole("searchbox", { name: "Поиск" })).toBeDisabled();
    expect(screen.queryByRole("button", { name: "Очистить" })).toBeNull();
  });
});
