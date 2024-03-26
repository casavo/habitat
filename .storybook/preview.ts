import type { Preview } from "@storybook/react";

import { HabitatCanvas } from "./../src/stories/components/Canvas";

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
        order: ["Docs", "Foundations", "Colors", "Typography", "Components"],
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
