import type { Meta, StoryFn } from "@storybook/react";
import { createRandomImage, createRandomPageCount } from "@/lib";
import { SquareThumbnail, SquareThumbnailProps } from "./SquareThumbnail";

const meta: Meta<SquareThumbnailProps> = {
  title: "UI Parts/thumbnails/SquareThumbnail",
  component: SquareThumbnail,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<SquareThumbnailProps> = (
  args: SquareThumbnailProps,
) => <SquareThumbnail {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: createRandomImage(),
  pageCount: createRandomPageCount(),
  showLikeButton: true,
  illustLink: {
    href: "https://example.com",
  },
};
