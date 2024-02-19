export const getComponentName = (filePath: string): string => {
  if (filePath.includes("components")) {
    const splitPath = filePath.split("/");
    const componentName = splitPath[splitPath.length - 2];
    return componentName.toLowerCase();
  }
  return "";
};
