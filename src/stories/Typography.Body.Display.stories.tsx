// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Display } from "./../components/Typography";

const meta: Meta<typeof Display> = {
  argTypes: {},
  component: Display,
  title: "Typography/Display",
};

export default meta;
type Story = StoryObj<typeof Display>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _Display: Story = {
  render: () => (
    <Display>
      Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris facere
    </Display>
  ),
};
