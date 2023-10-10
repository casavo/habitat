// Badge.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge/Badge";
import { HabitatTheme } from "../utils/theme.css";

const meta: Meta<typeof Badge> = {
  argTypes: {
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
  component: Badge,
  title: "Components/Badge",
};

export default meta;
type Story = StoryObj<typeof Badge>;

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

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _Badge: Story = {
  render: ({ ...args }) => (
    <div className={HabitatTheme}>
      <div style={{ display: "flex", gap: "16px" }}>
        <Badge status={args.status} theme={args.theme}>
          Badge
        </Badge>
        <Badge status={args.status} theme={args.theme} icon={<BadgeIcon />}>
          Badge
        </Badge>
      </div>
    </div>
  ),
};
