import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const mockLoaderIcon = () => <svg data-testid="loader-icon" />;

jest.mock("./assets/loader_24.svg", () => ({
  __esModule: true,
  default: mockLoaderIcon,
}));

jest.mock("./assets/loader_28.svg", () => ({
  __esModule: true,
  default: mockLoaderIcon,
}));

jest.mock("./assets/loader_32.svg", () => ({
  __esModule: true,
  default: mockLoaderIcon,
}));

// Require after SVG mocks are registered so Loader receives component mocks.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Loader } = require("./loader") as typeof import("./loader");

describe("Loader", () => {
  it("uses medium size by default", () => {
    render(<Loader />);

    const loader = screen.getByRole("status", { name: "Загрузка" });

    expect(loader).toBeInTheDocument();
    expect(screen.getByTestId("loader-icon")).toBeInTheDocument();
  });

  it("renders with the requested size prop", () => {
    render(<Loader size="large" />);

    expect(screen.getByRole("status", { name: "Загрузка" })).toBeInTheDocument();
    expect(screen.getByTestId("loader-icon")).toBeInTheDocument();
  });

  it("wraps loader with a centered container", () => {
    const { container } = render(<Loader className="loader-area" />);

    const loaderArea = container.firstElementChild;

    expect(loaderArea).toHaveClass("loader-area");
    expect(loaderArea).toContainElement(
      screen.getByRole("status", { name: "Загрузка" }),
    );
  });
});
