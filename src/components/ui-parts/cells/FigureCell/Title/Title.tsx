import { AnchorProps } from "@/types";

type Props = {
  title: string;
  illustLink?: AnchorProps;
};

export function FigureCellTitle({ title, illustLink }: Props): JSX.Element {
  return (
    <a
      className="truncate text-sm font-bold visited:text-gray-300"
      {...illustLink}
    >
      {title}
    </a>
  );
}
