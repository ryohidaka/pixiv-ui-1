import { NumberBadge } from "@/components";

export type SectionTitleProps = {
  /* title to show */
  title: string;
  /* Optional number to display in badge */
  count?: number;
  /* Optional flag to show a number badge */
  showNumberBadge?: boolean;
};

/**
 * SectionTitle Component
 * Renders a title with optional count badge.
 * @param param0
 * @returns
 */
export function SectionTitle({
  title,
  count = 0,
  showNumberBadge,
}: SectionTitleProps): JSX.Element {
  return (
    <div className="mb-3 flex items-center gap-2 text-xl font-bold leading-7">
      <h3>{title}</h3>
      {showNumberBadge && <NumberBadge number={count} />}
    </div>
  );
}
