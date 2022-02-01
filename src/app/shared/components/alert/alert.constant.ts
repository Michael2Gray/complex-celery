import { AppVariant } from '../../models';

export const ALERT_VARIANTS: Record<AppVariant, string> = {
  default: 'bg-neutral-200',
  info: 'bg-blue-100',
  success: 'bg-brand-100',
  error: 'bg-red-100',
  warning: 'bg-yellow-200',
};

export const HEADING_VARIANTS: Record<AppVariant, string> = {
  default: 'text-neutral-800',
  info: 'text-blue-800',
  success: 'text-brand-800',
  error: 'text-red-800',
  warning: 'text-yellow-700',
};
