import CrossIcon from './cross.icon';

type IconType = {
  type: 'cross';
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
};

export default function Icon({
  type,
  size,
  color,
  className,
  strokeWidth,
}: IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '24'}
      height={size || '24'}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth={strokeWidth || '2'}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {
        {
          cross: <CrossIcon />,
        }[type]
      }
    </svg>
  );
}
