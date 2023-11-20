// Badge.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { DefaultIcon } from "../assets/shared/DefaultIcon";
import { Badge } from "../components/Badge";
import { StoryLayout } from "./components/StoryLayout";

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
    children: "Type: house",
    icon: "defaultIcon",
    status: undefined,
    theme: "light",
  },
  component: Badge,
  title: "Components/Badge",
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const _Badge: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={
        <>Badge component is used to show a status or a type of an item.</>
      }
      importLine={'import { Badge } from "@casavo/habitat"'}
      isComponent={true}
      title="Components/Badge"
      usage={"<Badge>Type: house</Badge>"}
    >
      <Badge
        status={args.status}
        theme={args.theme}
        icon={Icons[args.icon as keyof typeof Icons]}
      >
        <>{args.children}</>
      </Badge>
    </StoryLayout>
  ),
};
