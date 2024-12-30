import type { Preview } from "@storybook/react";

import { HabitatCanvas } from "./../src/stories/components/Canvas";

import "./../src/css/reset.css";
import "./../src/css/tokens.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Docs", ["Introduction", "Brand"], "Colors", "Foundations", "Typography", "Components"],
      },
    },
    docs: {
      components: {
        Canvas: HabitatCanvas,
      },
    },
  },
};

export default preview;
