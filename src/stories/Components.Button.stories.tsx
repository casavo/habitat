// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";
import { ReactNode } from "react";
import { DefaultIcon } from "../assets/shared/DefaultIcon";
import { StoryLayout } from "./components/StoryLayout";

const Icons: Record<string, ReactNode> = {
  defaultIcon: <DefaultIcon />,
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
  args: {
    children: "Mimmo",
    disabled: false,
    icon: "empty",
    iconLayout: "sx",
    loading: false,
    size: "medium",
    theme: "dark",
    type: "button",
    variant: "primary",
  },
  component: Button,
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

const description = (
  <>
    Buttons are used to initialize an action, either in the background or
    foreground of an experience. They are used primarily for actions on a page,
    card, modal, or form.
  </>
);

export const _Button: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={description}
      importLine={'import { Button } from "@casavo/habitat"'}
      isComponent={true}
      title="Components/Button"
      usage={"<Button>Buy house!</Button>"}
    >
      <Button
        type={args.type}
        data-testid={args["data-testid"]}
        disabled={args.disabled}
        loading={args.loading}
        theme={args.theme}
        icon={Icons[args.icon as keyof typeof Icons]}
        iconLayout={args.iconLayout}
        size={args.size}
        variant={args.variant}
        onPress={() => alert("Button pressed")}
      >
        Buy house!
      </Button>
    </StoryLayout>
  ),
};
