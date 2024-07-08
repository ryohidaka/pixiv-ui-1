import type { Meta, StoryFn } from "@storybook/react";
import { createRandomIllustContent } from "@/lib";
import { FigureCell, FigureCellProps } from "./FigureCell";

const meta: Meta<FigureCellProps> = {
  title: "UI Parts/cells/FigureCell",
  component: FigureCell,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<FigureCellProps> = (args: FigureCellProps) => (
  <FigureCell {...args} />
);

const sampleContent = createRandomIllustContent();
const sampleLongContent = createRandomIllustContent(true);

const href = "https://example.com";

export const Default = Template.bind({});
Default.args = {
  ...sampleContent,
  illustLink: {
    href,
  },
  authorLink: {
    href,
  },
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  ...sampleLongContent,
  illustLink: {
    href,
  },
  authorLink: {
    href,
  },
};
