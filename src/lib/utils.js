/**
 * Merge classnames together
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
