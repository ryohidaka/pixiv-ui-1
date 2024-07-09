import { AnchorProps, ImageProps, User } from "@/types";
import { SquareThumbnail } from "../../thumbnails";
import { FigureCellAuthor } from "./Author";
import { FigureCellTitle } from "./Title";

/**
 * Props for FigureCell component
 */
export type FigureCellProps = {
  /** Title of the figure */
  title: string;
  /** Author information */
  author: User;
  /** Image properties */
  image: ImageProps;
  /** Number of pages (optional) */
  pageCount?: number;
  /** Link properties for the figure (optional) */
  figureLink?: AnchorProps;
  /** Link properties for the author (optional) */
  authorLink?: AnchorProps;
};

/**
 * FigureCell component
 *
 * This component displays a thumbnail image, title, and author information
 * for an figure. It also optionally displays the number of pages and links
 * for the figure and the author.
 *
 * @param {FigureCellProps} props - Properties for the component
 * @returns {JSX.Element} - The rendered component
 */
export function FigureCell({
  image,
  pageCount = 0,
  title,
  author,
  figureLink,
  authorLink,
}: FigureCellProps): JSX.Element {
  return (
    <div className="flex w-44 flex-col gap-1">
      <SquareThumbnail
        image={image}
        pageCount={pageCount}
        figureLink={figureLink}
      />
      <FigureCellTitle title={title} figureLink={figureLink} />
      <FigureCellAuthor author={author} authorLink={authorLink} />
    </div>
  );
}
