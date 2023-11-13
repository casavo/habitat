// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { H4 } from "./../components/Typography";

const meta: Meta<typeof H4> = {
  argTypes: {
    html: {
      control: "text",
      description: "allow to pass HTML directly to the component",
    },
  },
  args: {
    html: undefined,
  },
  component: H4,
  title: "Typography/H4",
};

export default meta;
type Story = StoryObj<typeof H4>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _H4: Story = {
  render: ({ ...args }) => (
    <H4 html={args.html}>
      Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris facere
    </H4>
  ),
};
