import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { Body } from "./../components/Typography";
import { StoryLayout } from "./components/StoryLayout";

const meta: Meta<typeof Body> = {
  argTypes: {
    html: {
      control: "text",
      description: "allow to pass HTML directly to the component",
    },
    size: {
      control: { options: ["s", "m", "l"], type: "radio" },
      defaultValue: "m",
      description: "define the font size",
    },
    strong: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "toggle the strong/bold font type",
    },
    underline: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "toggle the underline text decoration",
    },
  },
  args: {
    html: undefined,
    size: "m",
    strong: false,
    underline: false,
  },
  component: Body,
  title: "Typography/Body",
};

export default meta;
type Story = StoryObj<typeof Body>;

const description = (
  <>Wrapper for the {"<p>"} tag. Should be used for all the text in the page.</>
);

export const _Body: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={description}
      importLine={'import { Body } from "@casavo/habitat"'}
      isComponent={true}
      title="Typography/Body"
      usage={"<Body>Some text here</Body>"}
    >
      <Body
        html={args.html}
        size={args.size}
        strong={args.strong}
        underline={args.underline}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        diam lorem, tempor sed orci non, ornare laoreet dui. Proin nec tincidunt
        enim. Phasellus et diam tincidunt est semper mattis. Ut sed nulla non
        leo posuere aliquam eu ac velit. Cras rutrum felis est. Nam eleifend
        malesuada purus, non finibus libero.
      </Body>
    </StoryLayout>
  ),
};
