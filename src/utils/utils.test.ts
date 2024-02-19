import { describe, expect } from "vitest";

import { mq } from "./mediaqueries";
import { vars, HabitatTheme } from "./theme.css";
import { getComponentName } from "./build.ts";

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
    expect(vars.colors).toBeTypeOf("object");
    expect(vars.space).toBeTypeOf("object");
    expect(vars.mq).toBeTypeOf("object");
  });

  it("expect HabitatTheme to be a class name", () => {
    expect(HabitatTheme).toBeTypeOf("string");
  });
});

describe("CSS build - getComponentName", () => {
  it(" returns the component name", () => {
    const filePath = "src/components/Badge/Badge.tsx";
    expect(getComponentName(filePath)).toBe("badge");
  });

  it("returns an empty string if the file is not in the components folder", () => {
    const filePath = "src/utils/theme.css.ts";
    expect(getComponentName(filePath)).toBe("");
  });
});
