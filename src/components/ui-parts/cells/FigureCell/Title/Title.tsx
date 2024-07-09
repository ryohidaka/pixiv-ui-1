import { AnchorProps } from "@/types";

type Props = {
  title: string;
  link?: AnchorProps;
};

export function FigureCellTitle({ title, link }: Props): JSX.Element {
  return (
    <a className="truncate text-sm font-bold visited:text-gray-300" {...link}>
      {title}
    </a>
  );
}
