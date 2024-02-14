import { fireEvent, render, screen } from "@testing-library/react";
import { expect, describe, vi } from "vitest";

import { Switch } from "./Switch.tsx";

describe("Switch component", () => {
  it("renders", () => {
    const { container } = render(<Switch />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with a size", () => {
    const { container } = render(<Switch size="small" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders as selected", () => {
    const { container } = render(<Switch isSelected />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders as disabled", () => {
    const { container } = render(<Switch disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls onChange", async () => {
    const onChange = vi.fn();
    render(<Switch onChange={onChange} />);
    const input = screen.getByRole("switch");
    console.log(input.role);

    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
  });
});
