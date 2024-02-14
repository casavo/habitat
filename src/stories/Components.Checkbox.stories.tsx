import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../components/Checkbox";
import { StoryLayout } from "./components/StoryLayout";

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    checked: {
      control: "boolean",
      description: "toggle the state",
    },
    disabled: {
      control: "boolean",
      description: "toggle the standard disabled state",
    },
    error: {
      control: "boolean",
      description: "toggle the error state",
    },
    message: {
      control: "text",
      description: "the error message to display",
    },
    onChange: { action: "onChange" },
    value: {
      control: "text",
      description: "the value of the checkbox option",
    },
    variant: {
      control: "select",
      defaultValue: "neutral",
      description: "choose the branding variant",
      options: ["neutral", "B2B", "B2C"],
    },
  },
  args: {
    checked: true,
    disabled: false,
    error: false,
    message: "error message",
    value: "hasElevator",
    variant: "neutral",
  },
  component: Checkbox,
  title: "Components/Checkbox",
};

const description = (
  <>
    A checkbox is a form element that allows the user to select one or more
    options from a range of options.
  </>
);

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const _Checkbox: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={description}
      importLine={'import { Checkbox } from "@casavo/habitat"'}
      isComponent={true}
      title="Components/Checkbox"
      usage={"<Checkbox checked={false}>Has elevator</Checkbox>"}
    >
      <Checkbox
        {...args}
        checked={args.checked}
        disabled={args.disabled}
        error={args.error}
        message={args.message}
        value={args.value}
        variant={args.variant?.toLocaleLowerCase() as never}
      >
        Has elevator
      </Checkbox>
    </StoryLayout>
  ),
};
