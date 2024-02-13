import { render } from "@testing-library/react";
import { Spinner } from "./Spinner.tsx";
import { expect, describe } from "vitest";

describe("Spinner component", () => {
  it("renders", () => {
    const { container } = render(<Spinner size="medium" theme="dark" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
