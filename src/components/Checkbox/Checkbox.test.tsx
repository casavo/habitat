import { fireEvent, render, screen } from "@testing-library/react";
import { expect, describe, vi } from "vitest";

import { Checkbox } from "./Checkbox.tsx";

describe("Checkbox component", () => {
  it("renders", () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders as selected", () => {
    const { container } = render(<Checkbox isSelected />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders as disabled", () => {
    const { container } = render(<Checkbox disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls onChange", async () => {
    const onChange = vi.fn();
    render(<Checkbox onChange={onChange} />);
    const input = screen.getByRole("checkbox");

    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("calls onChange when is already checked", async () => {
    const onChange = vi.fn();
    render(<Checkbox checked={true} onChange={onChange} />);
    const input = screen.getByRole("checkbox");

    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledWith(false);
  });
});
