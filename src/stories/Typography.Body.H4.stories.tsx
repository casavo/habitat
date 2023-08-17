// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { H4 } from "./../components/Typography";

const meta: Meta<typeof H4> = {
  argTypes: {},
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
  render: () => (
    <H4>
      Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris facere
    </H4>
  ),
};
