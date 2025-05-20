import {cn} from "./lib/utils";

const iconMapper = {
  laundry: (
    <>
      <path d="M3 6h3" />
      <path d="M17 6h.01" />
      <rect width="18" height="20" x="3" y="2" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    </>
  ),
  headphone: (
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </>
  ),
  star: (
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  ),
  check: (
    <>
      <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5" />
      <path d="m9 11 3 3L22 4" />
    </>
  ),
} as const;

export type IconNameType = keyof typeof iconMapper;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  thickness?: number;
  iconName: keyof typeof iconMapper;
  onClick?: () => void;
}

const Icon = ({thickness = 2, ...props}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={thickness}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(
      "size-full cursor-pointer stroke-gray-800 dark:stroke-gray-200",
      props.className,
      props.onClick && "active:scale-90",
    )}
    onClick={props.onClick}
  >
    {iconMapper[props.iconName] ?? (
      <div className={cn(props.className, "flex items-center justify-center")}>Icon not found</div>
    )}
  </svg>
);

interface WrappedIconProps extends IconProps {
  iconClassName?: string;
}

export const WrappedIcon = ({thickness = 4, ...props}: WrappedIconProps) => {
  return (
    <button
      className={cn("size-8 rounded-full bg-black p-1 dark:bg-white", props.className)}
      onClick={props.onClick}
    >
      <Icon
        thickness={thickness}
        iconName={props.iconName}
        className={cn("size-full stroke-white dark:stroke-black", props.iconClassName)}
      />
    </button>
  );
};

export default Icon;
