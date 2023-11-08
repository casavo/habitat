// Badge.stories.ts|tsx

import "./../utils/reset.css";
import type { Meta, StoryObj } from "@storybook/react";
import { HabitatTheme } from "../utils/theme.css";
import { ReactNode } from "react";
import { DefaultIcon } from "../assets/shared/DefaultIcon";
import { Badge } from "../components/Badge";

const Icons: Record<string, ReactNode> = {
  defaultIcon: <DefaultIcon />,
  empty: undefined,
};

const status = ["success", "error", "warning", undefined];

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
      control: {
        labels: {
          error: "error",
          success: "success",
          undefined: "no set",
          warning: "warning",
        },
        type: "select",
      },
      defaultValue: undefined,
      description: "select the status of the badge",
      options: status,
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
