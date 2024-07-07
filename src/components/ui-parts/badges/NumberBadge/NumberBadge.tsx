import clsx from "clsx";

/**
 * Props for the NumberBadge component.
 */
export type NumberBadgeProps = {
  /**
   * The number to be displayed in the badge.
   */
  number: number;

  /**
   * Optional icon to be displayed alongside the number.
   */
  icon?: JSX.Element;

  /**
   * Additional class names to apply to the button.
   */
  className?: string;
};

/**
 * A badge component that shows number.
 *
 * @param {NumberBadgeProps} props - Props for the component.
 * @returns {JSX.Element} The rendered badge component.
 */
export function NumberBadge({
  number,
  icon,
  className,
}: NumberBadgeProps): JSX.Element {
  return (
    <span
      className={clsx(
        "flex h-5 min-w-5 items-center rounded-xl bg-[#00000052] px-2 text-xs font-bold text-white",
        className,
      )}
    >
      {icon && <span className="mr-[2px] flex">{icon}</span>}
      {number.toLocaleString()}
    </span>
  );
}
