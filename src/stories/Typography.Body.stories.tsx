import type { Meta, StoryObj } from "@storybook/react";

import { Body } from "./../components/Typography";

const meta: Meta<typeof Body> = {
  argTypes: {
    strong: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "toggle the strong/bold font type",
    },
    underline: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "toggle the underline text decoration",
    },
    size: {
      control: { type: "radio", options: ["s", "m", "l"] },
      defaultValue: "m",
      description: "define the font size",
    },
  },
  args: {
    strong: false,
    size: "m",
    underline: false,
  },
  component: Body,
  title: "Typography/Body",
};

export default meta;
type Story = StoryObj<typeof Body>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _Body: Story = {
  render: ({ ...args }) => (
    <Body size={args.size} strong={args.strong} underline={args.underline}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam
      lorem, tempor sed orci non, ornare laoreet dui. Proin nec tincidunt enim.
      Phasellus et diam tincidunt est semper mattis. Ut sed nulla non leo
      posuere aliquam eu ac velit. Cras rutrum felis est. Nam eleifend malesuada
      purus, non finibus libero.
    </Body>
  ),
};
