import { AnchorProps } from "@/types";

type Props = {
  title: string;
  figureLink?: AnchorProps;
};

export function FigureCellTitle({ title, figureLink }: Props): JSX.Element {
  return (
    <a
      className="truncate text-sm font-bold visited:text-gray-300"
      {...figureLink}
    >
      {title}
    </a>
  );
}
