// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { H1 } from "./../components/Typography";

const meta: Meta<typeof H1> = {
  argTypes: {
    html: {
      control: "text",
      description: "allow to pass HTML directly to the component",
    },
  },
  args: {
    html: `<a href="https://www.casavo.com">link to Casavo website</a>`,
  },
  component: H1,
  title: "Typography/H1",
};

export default meta;
type Story = StoryObj<typeof H1>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _H1: Story = {
  render: ({ ...args }) => (
    <H1 html={args.html}>
      Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris facere
    </H1>
  ),
};
