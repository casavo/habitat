import type { Meta, StoryObj } from "@storybook/react";

import "./../utils/reset.css";
import { Body, Inline } from "../components/Typography";
import { StoryLayout } from "./components/StoryLayout";
import { bodyArgTypes as argTypes } from "./utils/typography";

const meta: Meta<typeof Inline> = {
  argTypes,
  args: {
    html: undefined,
    italic: false,
    strong: false,
    underline: false,
  },
  component: Inline,
  title: "Typography/Inline",
};

export default meta;
type Story = StoryObj<typeof Inline>;

const description = (
  <>
    Wrapper for the {"<span>"} tag. Should be used to style individual portion
    of text in a block.
  </>
);

export const _Inline: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={description}
      importLine={'import { Inline } from "@casavo/habitat"'}
      isComponent={true}
      title="Typography/Inline"
      usage={"<Inline>Some text here</Inline>"}
    >
      <Body>
        This is paragraph text with{" "}
        <Inline
          color={args.color}
          html={args.html}
          italic={args.italic}
          strong={args.strong}
          underline={args.underline}
        >
          inline text
        </Inline>{" "}
        inside.
      </Body>
    </StoryLayout>
  ),
};
