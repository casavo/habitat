import type { Meta, StoryObj } from "@storybook/react";

import { H6 } from "../components/Typography";
import { StoryLayout } from "./components/StoryLayout";
import { argTypes } from "./utils/typography";

const meta: Meta<typeof H6> = {
  argTypes,
  args: {
    html: undefined,
  },
  component: H6,
  title: "Typography/H6",
};

export default meta;
type Story = StoryObj<typeof H6>;

export const _H6: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={<>Wrapper for the {"<h6>"} tag.</>}
      importLine={'import { H6 } from "@casavo/habitat"'}
      isComponent={true}
      title="Typography/H6"
      usage={"<H6>Some text here</H6>"}
    >
      <H6 color={args.color} html={args.html}>
        Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris
        facere
      </H6>
    </StoryLayout>
  ),
};
