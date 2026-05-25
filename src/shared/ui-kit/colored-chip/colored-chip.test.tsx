import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import { ColoredChip } from "./colored-chip";

const SvgMock = () => <svg data-testid="chip-icon" />;

describe("ColoredChip", () => {
  it("renders label with both icons", () => {
    const { container } = render(
      <ColoredChip
        label="Сортировка"
        color="#00c621"
        startIcon={SvgMock}
        endIcon={SvgMock}
      />,
    );

    expect(screen.getByText("Сортировка")).toBeInTheDocument();
    expect(container.querySelectorAll("svg")).toHaveLength(2);
  });

  it("applies multiline class when requested", () => {
    render(<ColoredChip label={"Много\nстрок"} color="#00c621" multiline />);

    expect(screen.getByText(/Много/).className).toContain("label");
    expect(screen.getByText(/Много/).closest("div")?.className).toContain(
      "multiline",
    );
  });
});
