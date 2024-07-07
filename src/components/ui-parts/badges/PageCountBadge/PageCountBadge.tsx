import { IoCopy } from "react-icons/io5";
import { NumberBadge } from "../NumberBadge";

/**
 * Props for the PageCountBadge component.
 */
export type PageCountBadgeProps = {
  /**
   * The number to be displayed in the badge.
   */
  pageCount: number;

  /**
   * Additional class names to apply to the button.
   */
  className?: string;
};

/**
 * A badge component that shows number with page icon.
 *
 * @param {PageCountBadgeProps} props - Props for the component.
 * @returns {JSX.Element} The rendered badge component.
 */
export function PageCountBadge({
  pageCount,
  className,
}: PageCountBadgeProps): JSX.Element {
  return (
    <NumberBadge
      number={pageCount}
      icon={<IoCopy className="rotate-180 transform" />}
      className={className}
    />
  );
}
