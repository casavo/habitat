// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { H2 } from "../components/Typography";
import { StoryLayout } from "./components/StoryLayout";
import { argTypes } from "./utils/typography";

const meta: Meta<typeof H2> = {
  argTypes,
  args: {
    html: undefined,
  },
  component: H2,
  title: "Typography/H2",
};

export default meta;
type Story = StoryObj<typeof H2>;

export const _H2: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={<>Wrapper for the {"<h2>"} tag.</>}
      importLine={'import { H2 } from "@casavo/habitat"'}
      isComponent={true}
      title="Typography/H2"
      usage={"<H2>Some text here</H2>"}
    >
      <H2 color={args.color} html={args.html}>
        Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris
        facere
      </H2>
    </StoryLayout>
  ),
};
