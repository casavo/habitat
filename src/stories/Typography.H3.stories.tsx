// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { H3 } from "../components/Typography";
import { StoryLayout } from "./components/StoryLayout";

const meta: Meta<typeof H3> = {
  argTypes: {
    html: {
      control: "text",
      description: "allow to pass HTML directly to the component",
    },
  },
  args: {
    html: undefined,
  },
  component: H3,
  title: "Typography/H3",
};

export default meta;
type Story = StoryObj<typeof H3>;

export const _H3: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={<>Wrapper for the {"<h3>"} tag.</>}
      importLine={'import { H3 } from "@casavo/habitat"'}
      isComponent={true}
      title="Typography/H3"
      usage={"<H3>Some text here</H3>"}
    >
      <H3 html={args.html}>
        Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris
        facere
      </H3>
    </StoryLayout>
  ),
};
