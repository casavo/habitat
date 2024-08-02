import { describe, expect } from "vitest";

import { mq } from "./mediaqueries";
import { themeContract, CasavoHabitatTheme } from "../utils/themes";

describe("General utilities", () => {
  it("expect media queries to have correct values", () => {
    expect(mq).toEqual({
      desktop: "(min-width: 1024px)",
      desktopHD: "(min-width: 1440px)",
      desktopSD: "(min-width: 960px)",
      mobile: "(min-width: 360px)",
      tablet: "(min-width: 768px)",
    });
  });

  it("expect theme vars to have been created correctly", () => {
    expect(themeContract.colors).toBeTypeOf("object");
    expect(themeContract.space).toBeTypeOf("object");
    expect(themeContract.mq).toBeTypeOf("object");
    expect(themeContract.corners).toBeTypeOf("object");
  });

  it("expect HabitatTheme to be a class name", () => {
    expect(CasavoHabitatTheme).toBeTypeOf("string");
  });
});
