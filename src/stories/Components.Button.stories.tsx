// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { Button } from "./../components/Button";
import { HabitatTheme } from "./../utils/theme.css";
import { ReactNode } from "react";

const BadgeIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.00568 1.33337L14.6667 5.03708V14.6667H1.33337V5.03708L8.00568 1.33337ZM8.00504 3.23921L3.00004 6.01754V13H13V6.01671L8.00504 3.23921Z" />
    </svg>
  );
};

const Icons: Record<string, ReactNode> = {
  defaultIcon: <BadgeIcon />,
  empty: undefined,
};

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
    icon: {
      control: "select",
      defaultValue: undefined,
      description:
        "select a icon but inside code you can pass whatever icon you want",
      options: Object.keys(Icons),
    },
    iconLayout: {
      control: "radio",
      description: "Choose the icon layout",
      options: ["sx", "dx"],
    },
    loading: {
      control: "boolean",
      description: "toggle the loading state",
    },
    size: {
      control: "radio",
      description: "Choose the size",
      options: ["small", "medium", "large"],
    },
    theme: {
      control: "radio",
      description: "Choose the theme",
      options: ["light", "dark"],
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
        theme={args.theme}
        icon={Icons[args.icon as keyof typeof Icons]}
        iconLayout={args.iconLayout}
        size={args.size}
        onPress={() => alert("Button pressed")}
      >
        Example button
      </Button>
    </div>
  ),
};
