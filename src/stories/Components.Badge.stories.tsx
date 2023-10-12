// Badge.stories.ts|tsx

import "./../utils/reset.css";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge/Badge";
import { HabitatTheme } from "../utils/theme.css";
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

const meta: Meta<typeof Badge> = {
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Badge",
      description: "select the text of the badge",
    },
    icon: {
      control: "select",
      defaultValue: undefined,
      description:
        "select a icon but inside code you can pass whatever icon you want",
      options: Object.keys(Icons),
    },
    status: {
      control: "select",
      defaultValue: undefined,
      description: "select the status of the badge",
      options: ["success", "error", "warning"],
    },
    theme: {
      control: "inline-radio",
      defaultValue: "light",
      description: "select the theme of the badge",
      options: ["light", "dark"],
    },
  },
  args: {
    children: "Mimmo",
    icon: "defaultIcon",
    status: undefined,
    theme: "light",
  },
  component: Badge,
  title: "Components/Badge",
};

export default meta;
type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _Badge: Story = {
  render: ({ ...args }) => (
    <div className={HabitatTheme}>
      <div style={{ display: "flex", gap: "16px" }}>
        <Badge
          status={args.status}
          theme={args.theme}
          icon={Icons[args.icon as keyof typeof Icons]}
        >
          <>{args.children}</>
        </Badge>
      </div>
    </div>
  ),
};
