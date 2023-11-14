// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { H3 } from "./../components/Typography";

const meta: Meta<typeof H3> = {
  argTypes: {
    html: {
      control: "text",
      description: "allow to pass HTML directly to the component",
    },
  },
  args: {
    html: undefined,
  },
  component: H3,
  title: "Typography/H3",
};

export default meta;
type Story = StoryObj<typeof H3>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _H3: Story = {
  render: ({ ...args }) => (
    <H3 html={args.html}>
      Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris facere
    </H3>
  ),
};
