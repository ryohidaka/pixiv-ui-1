import type { Meta, StoryFn } from "@storybook/react";
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

const href = "https://example.com";

export const Default = Template.bind({});
Default.args = {
  image: { src: "https://via.placeholder.com/300" },
  pageCount: 999,
  title: "Sample Title",
  author: {
    id: "1",
    name: "Sample Author",
    avatarURL: "https://via.placeholder.com/300",
    link: { href },
  },
  figureLink: {
    href,
  },
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  image: { src: "https://via.placeholder.com/300" },
  pageCount: 999,
  title: "Sample Long Long Long Title",
  author: {
    id: "1",
    name: "Sample Long Long Long Author",
    avatarURL: "https://via.placeholder.com/300",
    link: { href },
  },
  figureLink: {
    href,
  },
};
