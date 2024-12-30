import StyleDictionary from "style-dictionary";

StyleDictionary.registerFormat({
  name: "css/variables",
  format: function (dictionary, config) {
    return `.HabitatTheme {
${dictionary.allTokens
  .map((prop) => {
    if (prop.type !== "color") {
      console.log(prop);
    }
    const name = prop.name.replace("foundations-", "").replace("root-", "");
    const value =
      prop.type === "dimension"
        ? prop.value.toString().replace("rem", "px")
        : prop.value;
    return `  --${name}: ${value};`;
  })
  .join("\n")}
}`;
  },
});

const config = {
  source: ["./tokens.json"],
  platforms: {
    json: {
      files: [
        {
          destination: "./src/utils/tokens.json",
          format: "json/nested",
        },
      ],
    },
    css: {
      transformGroup: "css",
      files: [
        {
          format: "css/variables",
          destination: "./src/css/tokens.css",
          options: {
            outputReferences: true,
            selector: ".HabitatTheme",
          },
        },
      ],
    },
  },
};

export default config;
