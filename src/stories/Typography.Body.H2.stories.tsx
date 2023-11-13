// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { H2 } from "./../components/Typography";

const meta: Meta<typeof H2> = {
  argTypes: {
    html: {
      control: "text",
      description: "allow to pass HTML directly to the component",
    },
  },
  args: {
    html: undefined,
  },
  component: H2,
  title: "Typography/H2",
};

export default meta;
type Story = StoryObj<typeof H2>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _H2: Story = {
  render: ({ ...args }) => (
    <H2 html={args.html}>
      Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris facere
    </H2>
  ),
};
