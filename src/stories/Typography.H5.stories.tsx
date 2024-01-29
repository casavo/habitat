import type { Meta, StoryObj } from "@storybook/react";

import { H5 } from "../components/Typography";
import { StoryLayout } from "./components/StoryLayout";
import { argTypes } from "./utils/typography";

const meta: Meta<typeof H5> = {
  argTypes,
  args: {
    html: undefined,
  },
  component: H5,
  title: "Typography/H5",
};

export default meta;
type Story = StoryObj<typeof H5>;

export const _H5: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={<>Wrapper for the {"<h5>"} tag.</>}
      importLine={'import { H5 } from "@casavo/habitat"'}
      isComponent={true}
      title="Typography/H5"
      usage={"<H5>Some text here</H5>"}
    >
      <H5 color={args.color} html={args.html}>
        Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris
        facere
      </H5>
    </StoryLayout>
  ),
};
