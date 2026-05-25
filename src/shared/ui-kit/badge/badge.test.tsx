import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders medium badge count by default", () => {
    render(<Badge count={42} />);

    expect(screen.getByText("42")).toBeInTheDocument();
  });

  it("renders large badge content", () => {
    render(<Badge size="large">99+</Badge>);

    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  it("renders dot badge without text content", () => {
    const { container } = render(<Badge size="dot" variant="critical" />);

    expect(container).not.toHaveTextContent();
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeNull();
  });
});
