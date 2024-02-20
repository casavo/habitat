// This function is used to create the component CSS name from the file path
export const getComponentName = (filePath: string): string => {
  if (filePath.includes("components")) {
    const splitPath = filePath.split("/");
    const componentName = splitPath[splitPath.length - 2];
    return componentName.toLowerCase();
  }
  return "";
};
