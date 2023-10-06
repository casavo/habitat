// Switch.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { HabitatTheme } from "./../utils/theme.css";
import { Switch } from "../components/Switch";

const meta: Meta<typeof Switch> = {
  argTypes: {
    isSelected: {
      control: "boolean",
      description: "Whether the Switch should be selected (controlled)"
    },
    disabled: {
      control: "boolean",
      description: "Toggle the standard disabled state",
    },
  },
  component: Switch,
  title: "Components/Switch",
};

export default meta;
type Story = StoryObj<typeof Switch>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _Switch: Story = {
  render: ({ ...args }) => (
    <div className={HabitatTheme}>
      <Switch 
        
        disabled={args.disabled}
        isSelected={args.isSelected}
      />
    </div>
  ),
};
