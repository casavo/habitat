// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./../components/Button";

const meta: Meta<typeof Button> = {
  argTypes: {
    "data-testid": {
      control: { type: "text" },
      description: "an ID mostly used for E2E testing",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "toggle the standard disabled state",
    },
    loading: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "toggle the loading state",
    },
    type: {
      control: { type: "select" },
      description: "the standard HTML button types",
      options: ["button", "submit", "reset"],
    },
  },
  component: Button,
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _Button: Story = {
  render: ({ ...args }) => (
    <Button
      type={args.type}
      data-testid={args["data-testid"]}
      disabled={args.disabled}
      loading={args.loading}
    >
      Example button
    </Button>
  ),
};

/*export const _Display: Story = {
  render: ({ ...args }) => (
    <Display>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Display>
  ),
};*/
