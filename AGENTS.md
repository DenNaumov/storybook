# Agent Instructions

## React Component Tests

- Test rendered DOM behavior with `@testing-library/react`.
- Render components with JSX, for example `render(<Alert title="Title" />)`.
- Query by user-facing behavior: `screen.getByRole`, `screen.getByText`,
  `screen.queryByText`, `within`, and jest-dom matchers.
- Trigger interactions with Testing Library helpers such as `fireEvent`.
- Do not call React components as plain functions in tests, for example
  `Alert({ title: "Title" })`.
- Do not inspect React element internals with `Children.toArray`,
  `isValidElement`, or `element.props` when the same behavior can be tested
  through the DOM.
- Mock framework-only or asset-heavy dependencies locally in the test when they
  block DOM rendering, but keep the assertions focused on the component under
  test.
