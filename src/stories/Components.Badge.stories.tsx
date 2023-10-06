// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge/Badge";
import { HabitatTheme } from "../utils/theme.css";
import { BadgeIcon } from "../assets/badge/BadgeIcon";

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
