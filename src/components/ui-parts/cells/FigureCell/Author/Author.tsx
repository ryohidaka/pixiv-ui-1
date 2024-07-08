import { AnchorProps, User } from "@/types";

type Props = {
  author: User;
  authorLink?: AnchorProps;
};

export function FigureCellAuthor({ author, authorLink }: Props): JSX.Element {
  return (
    <div className="flex items-center gap-1">
      <a {...authorLink}>
        <img src={author.avatarURL} className="h-6 w-6 rounded-full" />
      </a>

      <a className="truncate text-sm text-slate-600" {...authorLink}>
        {author.name}
      </a>
    </div>
  );
}
