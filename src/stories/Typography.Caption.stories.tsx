import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { Caption } from "./../components/Typography";

const meta: Meta<typeof Caption> = {
  argTypes: {
    html: {
      control: "text",
      description: "allow to pass HTML directly to the component",
    },
    strong: {
      caption: "toggle the strong/bold font type",
      control: { type: "boolean" },
      defaultValue: false,
    },
    underline: {
      caption: "toggle the underline text decoration",
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
  args: {
    html: undefined,
    strong: false,
    underline: false,
  },
  component: Caption,
  title: "Typography/Caption",
};

export default meta;
type Story = StoryObj<typeof Caption>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _Caption: Story = {
  render: ({ ...args }) => (
    <Caption html={args.html} strong={args.strong} underline={args.underline}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam
      lorem, tempor sed orci non, ornare laoreet dui. Proin nec tincidunt enim.
      Phasellus et diam tincidunt est semper mattis. Ut sed nulla non leo
      posuere aliquam eu ac velit. Cras rutrum felis est. Nam eleifend malesuada
      purus, non finibus libero.
    </Caption>
  ),
};
