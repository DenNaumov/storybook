import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";

import { ChipButton } from "./chip-button";

describe("ChipButton", () => {
  it("renders label with both icons in the expected order", () => {
    render(
      <ChipButton
        size="l"
        label="Sort"
        startIcon="start"
        endIcon="end"
        active
      />,
    );

    const button = screen.getByRole("button", { name: "start Sort end" });

    expect(within(button).getByText("start")).toBeInTheDocument();
    expect(within(button).getByText("Sort")).toBeInTheDocument();
    expect(within(button).getByText("end")).toBeInTheDocument();
    expect(button).toHaveTextContent("startSortend");
  });

  it("renders icon-only content when there is no label", () => {
    render(<ChipButton size="s" startIcon="start" />);

    expect(screen.getByRole("button", { name: "start" })).toBeInTheDocument();
  });

  it("passes through disabled state and children content", () => {
    render(
      <ChipButton size="m" disabled>
        Custom content
      </ChipButton>,
    );

    const button = screen.getByRole("button", { name: "Custom content" });

    expect(button).toBeDisabled();
    expect(within(button).getByText("Custom content")).toBeInTheDocument();
  });

  it("does not call the chip handler when the end icon handles the click", () => {
    const handleChipClick = jest.fn();
    const handleEndIconClick = jest.fn();

    render(
      <ChipButton
        size="m"
        label="Filter"
        endIcon={<span onClick={handleEndIconClick}>clear</span>}
        onClick={handleChipClick}
      />,
    );

    fireEvent.click(screen.getByText("clear"));

    expect(handleEndIconClick).toHaveBeenCalledTimes(1);
    expect(handleChipClick).not.toHaveBeenCalled();
  });

  it("calls the chip handler through a decorative end icon", () => {
    const handleChipClick = jest.fn();

    render(
      <ChipButton
        size="m"
        label="Filter"
        endIcon={<span>arrow</span>}
        onClick={handleChipClick}
      />,
    );

    fireEvent.click(screen.getByText("arrow"));

    expect(handleChipClick).toHaveBeenCalledTimes(1);
  });
});
