// Twilight Horizon Color Palette
export const colors = {
  // Primary Background
  deepIndigo: "#1A1B41",
  darkIndigo: "#0f1028",

  // Accent Colors
  mutedPeach: "#FFD5BA",
  mutedPeachDark: "#ffc4a3",
  softLilac: "#B983FF",
  softLilacDark: "#9b6ddb",

  // Tier Colors
  tierGreen: "#4ade80",
  tierYellow: "#fbbf24",
  tierRed: "#f87171",

  // Utility Colors
  white: "#ffffff",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
} as const;

export type ColorKey = keyof typeof colors;
