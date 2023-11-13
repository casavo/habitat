import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { Description } from "./../components/Typography";

const meta: Meta<typeof Description> = {
  argTypes: {
    html: {
      control: "text",
      description: "allow to pass HTML directly to the component",
    },
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
  },
  args: {
    html: undefined,
    strong: false,
    underline: false,
  },
  component: Description,
  title: "Typography/Description",
};

export default meta;
type Story = StoryObj<typeof Description>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _Description: Story = {
  render: ({ ...args }) => (
    <Description
      html={args.html}
      strong={args.strong}
      underline={args.underline}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam
      lorem, tempor sed orci non, ornare laoreet dui. Proin nec tincidunt enim.
      Phasellus et diam tincidunt est semper mattis. Ut sed nulla non leo
      posuere aliquam eu ac velit. Cras rutrum felis est. Nam eleifend malesuada
      purus, non finibus libero.
    </Description>
  ),
};
