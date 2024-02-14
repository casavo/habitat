import { render } from "@testing-library/react";
import { Button } from "./Button.tsx";
import { expect, describe } from "vitest";

describe("Button component", () => {
  it("renders", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with a theme", () => {
    const { container } = render(<Button theme="dark">Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with a size", () => {
    const { container } = render(<Button size="large">Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with a disabled state", () => {
    const { container } = render(<Button disabled>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with a loading state", () => {
    const { container } = render(<Button loading>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
