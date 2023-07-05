// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Body } from "./../components/Typography";

const meta: Meta<typeof Body> = {
  component: Body,
  argTypes: {
    underline: {
      defaultValue: false,
      description: "toggle the underline text decoration",
      control: { type: "boolean" },
    },
    strong: {
      defaultValue: false,
      description: "toggle the strong/bold font type",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Body>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const BodyText: Story = {
  render: ({ ...args }) => (
    <Body underline={args.underline} strong={args.strong} size={args.size}>
      bella raga tutto rego
    </Body>
  ),
};
