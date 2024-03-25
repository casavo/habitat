// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { H4 } from "../components/Typography";
import { StoryLayout } from "./components/StoryLayout";
import { argTypes } from "./utils/typography";

const meta: Meta<typeof H4> = {
  argTypes,
  args: {
    html: undefined,
    noMargin: false,
  },
  component: H4,
  title: "Typography/H4",
};

export default meta;
type Story = StoryObj<typeof H4>;

export const _H4: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={<>Wrapper for the {"<h4>"} tag.</>}
      importLine={'import { H4 } from "@casavo/habitat"'}
      isComponent={true}
      title="Typography/H4"
      usage={"<H4>Some text here</H4>"}
    >
      <H4 color={args.color} html={args.html} noMargin={args.noMargin}>
        Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris
        facere
      </H4>
    </StoryLayout>
  ),
};
