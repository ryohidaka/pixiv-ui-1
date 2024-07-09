import { User } from "@/types";

type Props = {
  author: User;
};

export function FigureCellAuthor({ author }: Props): JSX.Element {
  return (
    <div className="flex items-center gap-1">
      <a {...author.link}>
        <img src={author.avatarURL} className="h-6 w-6 rounded-full" />
      </a>

      <a className="truncate text-sm text-slate-600" {...author.link}>
        {author.name}
      </a>
    </div>
  );
}
