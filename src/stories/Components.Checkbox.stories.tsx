import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../components/Checkbox";
import { StoryLayout } from "./components/StoryLayout";
import {ComponentProps} from "react";

type StoryProps = ComponentProps<typeof Checkbox> &{ text:string} 

const meta: Meta<StoryProps> = {
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
  },
  args: {
    checked: true,
    disabled: false,
    error: false,
    message: "error message",
    text: "Has elevator",
    value: "hasElevator"
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
type Story = StoryObj<StoryProps>;

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
        checked={args.checked}
        disabled={args.disabled}
        error={args.error}
        message={args.message}
        value={args.value}
      >
        {args.text}
      </Checkbox>
    </StoryLayout>
  ),
};
