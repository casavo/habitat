import type { Meta, StoryObj } from "@storybook/react";

import { CheckGroup } from "./../components/CheckGroup";
import { StoryLayout } from "./components/StoryLayout";

const meta: Meta<typeof CheckGroup> = {
  argTypes: {},
  args: {},
  component: CheckGroup,
  title: "Components/CheckGroup",
};

const description = <>Bla bla</>;

export default meta;
type Story = StoryObj<typeof CheckGroup>;

export const _CheckGroup: Story = {
  render: ({ ...args }) => (
    <StoryLayout
      description={description}
      importLine={'import { CheckGroup } from "@casavo/habitat"'}
      isComponent={true}
      title="Components/CheckGroup"
      usage={"<CheckGroup></CheckGroup>"}
    >
      <CheckGroup>content</CheckGroup>
    </StoryLayout>
  ),
};
