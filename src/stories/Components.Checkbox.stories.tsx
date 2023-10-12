import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./../components/Checkbox";
import { HabitatTheme } from "./../utils/theme.css";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components/Checkbox",
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const _Checkbox: Story = {
  render: () => (
    <div className={HabitatTheme}>
      <Checkbox />
    </div>
  ),
};
