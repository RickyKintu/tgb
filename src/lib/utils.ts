import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format a number with thousands separators, stable for SSR (no locale surprises). */
export function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}

/** Format a currency-ish value like "$12,400" without decimals. */
export function formatUSD(value: number): string {
  return `$${formatNumber(Math.round(value))}`;
}
