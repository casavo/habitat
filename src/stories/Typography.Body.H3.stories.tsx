// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { H3 } from "./../components/Typography";

const meta: Meta<typeof H3> = {
  argTypes: {},
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
  render: () => (
    <H3>
      Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris facere
    </H3>
  ),
};
