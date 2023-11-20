import { vars } from "../../utils/theme.css";

const findKeys = (obj: never, prefix: string = ""): string[] => {
  const keys = Object.keys(obj).map((key) => {
    const nestedKey = prefix === "" ? key : `${prefix}.${key}`;

    return typeof obj[key] !== "object"
      ? nestedKey
      : findKeys(obj[key], nestedKey);
  });
  return keys.flat();
};

export const getColors = (): string[] => {
  return findKeys(vars.colors as never);
};
