import { render } from "@testing-library/react";
import { H1, H2, H3, H4, H5, H6, Body, Inline } from "./Typography.tsx";
import { expect, describe } from "vitest";

describe("Typography components", () => {
  test("H1 renders correct text", () => {
    const { getByText } = render(<H1 color="root.neutral.600">Test Text</H1>);
    const textElement = getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test("H2 renders correct text", () => {
    const { getByText } = render(<H2 color="root.neutral.600">Test Text</H2>);
    const textElement = getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test("H3 renders correct text", () => {
    const { getByText } = render(<H3 color="root.neutral.600">Test Text</H3>);
    const textElement = getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test("H4 renders correct text", () => {
    const { getByText } = render(<H4 color="root.neutral.600">Test Text</H4>);
    const textElement = getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test("H5 renders correct text", () => {
    const { getByText } = render(<H5 color="root.neutral.600">Test Text</H5>);
    const textElement = getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test("H6 renders correct text", () => {
    const { getByText } = render(<H6 color="root.neutral.600">Test Text</H6>);
    const textElement = getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test("Body renders correct text", () => {
    const { getByText } = render(
      <Body color="root.neutral.600">Test Text</Body>
    );
    const textElement = getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test("Inline renders correct text", () => {
    const { getByText } = render(
      <Inline color="root.neutral.600">Test Text</Inline>
    );
    const textElement = getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });
});
