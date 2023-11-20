// Switch.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../components/Switch";
import { StoryLayout } from "./components/StoryLayout";

const meta: Meta<typeof Switch> = {
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Toggle the standard disabled state",
    },
    isSelected: {
      control: "boolean",
      description: "Whether the Switch should be selected (controlled)",
    },
    size: {
      control: "inline-radio",
      defaultValue: "normal",
      description: "Change the switch size",
      options: ["normal", "small"],
    },
  },
  args: {
    disabled: false,
    isSelected: false,
    size: "normal",
  },
  component: Switch,
  title: "Components/Switch",
};

export default meta;
type Story = StoryObj<typeof Switch>;

const description = (
  <>
    A switch is a component that allows the user to toggle between two states,
    on or off.
  </>
);

export const _Switch: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={description}
      importLine={'import { Switch } from "@casavo/habitat"'}
      isComponent={true}
      title="Components/Switch"
      usage={"<Switch />"}
    >
      <Switch {...args} />
    </StoryLayout>
  ),
};
