import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export type User = {
  id: string;
  name: string;
  avatarURL: string;
  link?: AnchorProps;
};

export type Image = {
  src: string;
};

export type Figure = {
  id: string;
  image: {
    src: string;
  };
  pageCount: number;
  title: string;
  author: User;
  link?: AnchorProps;
};

export type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export type AnchorProps = DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
