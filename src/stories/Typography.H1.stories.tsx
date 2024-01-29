// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { H1 } from "../components/Typography";
import { StoryLayout } from "./components/StoryLayout";
import { argTypes } from "./utils/typography";

const meta: Meta<typeof H1> = {
  argTypes,
  args: {
    display: false,
    html: `<a href="https://www.casavo.com">link to Casavo website</a>`,
  },
  component: H1,
  title: "Typography/H1",
};

export default meta;
type Story = StoryObj<typeof H1>;

export const _H1: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={<>Wrapper for the {"<h1>"} tag.</>}
      importLine={'import { H1 } from "@casavo/habitat"'}
      isComponent={true}
      title="Typography/H1"
      usage={"<H1>Some text here</H1>"}
    >
      <H1 display={args.display} color={args.color} html={args.html}>
        Idque Caesaris facere voluntate liceret: sese habere. dque Caesaris
        facere
      </H1>
    </StoryLayout>
  ),
};
