import * as React from 'react';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, Circle, ChevronRight } from 'lucide-react';
import styles from './DropdownMenu.module.scss';

const Dropdown = DropdownPrimitive.Root;
const DropdownGroup = DropdownPrimitive.Group;
const DropdownPortal = DropdownPrimitive.Portal;
const DropdownSub = DropdownPrimitive.Sub;
const DropdownRadioGroup = DropdownPrimitive.RadioGroup;

const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.Trigger
    ref={ref}
    className={styles.dropdownTrigger}
    {...props}
  >
    {children}
    <ChevronRight
      className={styles.dropdownChevron}
      style={{ transform: 'rotate(90deg)' }}
    />
  </DropdownPrimitive.Trigger>
));
DropdownTrigger.displayName = 'DropdownTrigger';

const DropdownSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> & { inset?: boolean }
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.SubTrigger
    ref={ref}
    className={styles.dropdownSubtrigger}
    {...props}
  >
    {children}
    <ChevronRight className={styles.dropdownChevron} />
  </DropdownPrimitive.SubTrigger>
));
DropdownSubTrigger.displayName = 'DropdownSubTrigger';

const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.SubContent
    ref={ref}
    className={styles.dropdownSubcontent}
    {...props}
  >
    {children}
  </DropdownPrimitive.SubContent>
));
DropdownSubContent.displayName = 'DropdownSubContent';

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DropdownPortal>
    <DropdownPrimitive.Content
      ref={ref}
      className={styles.dropdownContent}
      {...props}
    >
      {children}
    </DropdownPrimitive.Content>
  </DropdownPortal>
));
DropdownContent.displayName = 'DropdownContent';

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={styles.dropdownItem}
    {...props}
  >
    {children}
  </DropdownPrimitive.Item>
));
DropdownItem.displayName = 'DropdownItem';

const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>
>(({ children, checked, ...props }, ref) => (
  <DropdownPrimitive.CheckboxItem
    ref={ref}
    className={styles.dropdownItem}
    checked={checked}
    {...props}
  >
    <DropdownPrimitive.ItemIndicator className={styles.dropdownIndicator}>
      <Check className={styles.dropdownIconSm} />
    </DropdownPrimitive.ItemIndicator>
    {children}
  </DropdownPrimitive.CheckboxItem>
));
DropdownCheckboxItem.displayName = 'DropdownCheckboxItem';

const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.RadioItem
    ref={ref}
    className={styles.dropdownItem}
    {...props}
  >
    <DropdownPrimitive.ItemIndicator className={styles.dropdownIndicator}>
      <Circle className={styles.dropdownIconXs} />
    </DropdownPrimitive.ItemIndicator>
    {children}
  </DropdownPrimitive.RadioItem>
));
DropdownRadioItem.displayName = 'DropdownRadioItem';

const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={styles.dropdownLabel}
    {...props}
  >
    {children}
  </DropdownPrimitive.Label>
));
DropdownLabel.displayName = 'DropdownLabel';

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={styles.dropdownSeparator}
    {...props}
  />
));
DropdownSeparator.displayName = 'DropdownSeparator';

const DropdownShortcut = ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={styles.dropdownShortcut}
    {...props}
  >
    {children}
  </span>
);
DropdownShortcut.displayName = 'DropdownShortcut';

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownShortcut,
  DropdownGroup,
  DropdownPortal,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownRadioGroup,
};
