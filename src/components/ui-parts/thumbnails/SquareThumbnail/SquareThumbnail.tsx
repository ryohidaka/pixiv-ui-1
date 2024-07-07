import { AnchorProps, ImageProps } from "@/types";
import { HeartButton, PageCountBadge } from "../..";

/**
 * Props for the SquareThumbnail component.
 */
export type SquareThumbnailProps = {
  /**
   * Image properties
   */
  image: ImageProps;

  /**
   * Optional number of pages to display
   */
  pageCount?: number;

  /**
   * Optional flag to show a like button
   */
  showLikeButton?: boolean;

  /**
   * Optional link to illust page
   */
  illustLink?: AnchorProps;
};

/**
 * SquareThumbnail Component
 * Renders a square thumbnail image with optional page count badge and like button.
 *
 * @param {SquareThumbnailProps} props - The props for the SquareThumbnail component
 * @returns {JSX.Element} The rendered SquareThumbnail component
 */
export function SquareThumbnail({
  image,
  pageCount = 0,
  showLikeButton,
  illustLink,
}: SquareThumbnailProps): JSX.Element {
  return (
    <a
      className="relative aspect-square overflow-hidden rounded"
      {...illustLink}
    >
      {pageCount > 0 && (
        <PageCountBadge
          pageCount={pageCount}
          className="absolute right-1 top-1 z-10"
        />
      )}

      <img
        {...image}
        className="object- aspect-square h-full w-full hover:opacity-80"
      />

      {showLikeButton && (
        <HeartButton className="absolute bottom-1 right-1 z-10 text-2xl" />
      )}
    </a>
  );
}
