import {fireEvent, render, RenderResult} from "@testing-library/react";
import { Button } from "./Button.tsx";
import { expect, describe, vi } from "vitest";
import { useEffect, useRef } from "react";

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

  describe("when it is disabled",()=>{
    let component:RenderResult
    const onPress = vi.fn()
    const buttonTestId = "buttonId"
    beforeEach(()=>{
      component = render(<Button disabled data-testid={buttonTestId} onPress={onPress}>Click me</Button>);
    })

    it("renders with a disabled state", () => {
      expect(component.container.firstChild).toMatchSnapshot();
    });

    it("no callback is called when pressed", () => {
      const button = component.getByTestId(buttonTestId)
      fireEvent.click(button)
      expect(onPress).not.toBeCalled()
    });

  })


  it("renders with a loading state", () => {
    const { container } = render(<Button loading>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("passing a ref works as expected", () => {
    const refHasValue = vi.fn()
    
    const Wrapper = () => {
      const ref = useRef(null)

      useEffect(() => {
        (ref.current !== null) && refHasValue()
      }, [ref])

      return <Button ref={ref}>Click me</Button>
    }

    const { container } = render(<Wrapper />);
    expect(container.firstChild).toMatchSnapshot();

    expect(refHasValue).toHaveBeenCalled();
  });
});
