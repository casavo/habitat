import type { Meta, StoryObj } from "@storybook/react";

import { Description } from "./../components/Typography";
import { StoryLayout } from "./components/StoryLayout";
import { bodyArgTypes as argTypes } from "./utils/typography";

const meta: Meta<typeof Description> = {
  argTypes,
  args: {
    html: undefined,
    strong: false,
    underline: false,
  },
  component: Description,
  title: "Typography/Description",
};

export default meta;
type Story = StoryObj<typeof Description>;

const description = <>Wrapper for the {"<p>"} tag.</>;

export const _Description: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={description}
      importLine={'import { Description } from "@casavo/habitat"'}
      isComponent={true}
      title="Typography/Description"
      usage={"<Description>Some text here</Description>"}
    >
      <Description
        color={args.color}
        html={args.html}
        strong={args.strong}
        underline={args.underline}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        diam lorem, tempor sed orci non, ornare laoreet dui. Proin nec tincidunt
        enim. Phasellus et diam tincidunt est semper mattis. Ut sed nulla non
        leo posuere aliquam eu ac velit. Cras rutrum felis est. Nam eleifend
        malesuada purus, non finibus libero.
      </Description>
    </StoryLayout>
  ),
};
