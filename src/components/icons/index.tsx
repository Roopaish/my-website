import ArrowRightIcon from './arrow-right.icon';
import CrossIcon from './cross.icon';
import GithubIcon from './github.icon';
import LinkIcon from './link.icon';
import MenuIcon from './menu.icon';
import MoonIcon from './moon.icon';
import SunIcon from './sun.icon';

type IconType = {
  type: 'cross' | 'sun' | 'moon' | 'menu' | 'arrow-right' | 'github' | 'link';
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
      className={`inline-block ${className}`}
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
          sun: <SunIcon />,
          moon: <MoonIcon />,
          menu: <MenuIcon />,
          'arrow-right': <ArrowRightIcon />,
          github: <GithubIcon />,
          link: <LinkIcon />
        }[type]
      }
    </svg>
  );
}
