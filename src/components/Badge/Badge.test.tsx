import { render } from "@testing-library/react";
import { expect, describe } from "vitest";

import { Badge } from "./Badge.tsx";
import { WarningIcon } from "../../assets/badge/WarningIcon";

describe("Badge component", () => {
  it("renders", () => {
    const { container } = render(<Badge>Click me</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with a theme", () => {
    const { container } = render(<Badge theme="dark">Click me</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with a status", () => {
    const { container } = render(<Badge status="warning">Click me</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with an icon", () => {
    const { container } = render(
      <Badge icon={<WarningIcon />}>Click me</Badge>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
