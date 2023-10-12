// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { Button } from "./../components/Button";
import { HabitatTheme } from "./../utils/theme.css";

const meta: Meta<typeof Button> = {
  argTypes: {
    "data-testid": {
      control: "text",
      description: "an ID mostly used for E2E testing",
    },
    disabled: {
      control: "boolean",
      description: "toggle the standard disabled state",
    },
    loading: {
      control: "boolean",
      description: "toggle the loading state",
    },
    type: {
      control: "select",
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
    <div className={HabitatTheme}>
      <Button
        type={args.type}
        data-testid={args["data-testid"]}
        disabled={args.disabled}
        loading={args.loading}
      >
        Example button
      </Button>
    </div>
  ),
};
