import type { LucideProps } from 'lucide-react';
import {
  House,
  Search,
  ShoppingBag,
  Heart,
  Minus,
  Plus,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Github,
  Mail,
  Linkedin,
  Sun,
  Moon,
} from 'lucide-react';

const icons = {
  home: House,
  search: Search,
  bag: ShoppingBag,
  heart: Heart,
  minus: Minus,
  plus: Plus,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  close: X,
  menu: Menu,
  gitHub: Github,
  mail: Mail,
  linkedin: Linkedin,
  sun: Sun,
  moon: Moon,
};

export type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: IconName;
}

export const Icon = ({ name, size = 16, className, strokeWidth = 1.5, ...props }: IconProps) => {
  const Component = icons[name];

  return (
    <Component
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
};
