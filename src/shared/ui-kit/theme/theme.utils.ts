import type { Theme } from "./theme.types";

/**
 * Converts camelCase to kebab-case.
 * e.g. bgSurface → bg-surface, brandMain → brand-main
 */
const toKebab = (str: string): string =>
  str.replace(/([A-Z])/g, "-$1").toLowerCase();

/**
 * Flattens a resolved Theme object into a Record of CSS custom properties.
 * All keys use kebab-case.
 *
 * Example:
 *   { colors: { bgSurface: { primary: '#fff' } }, spacing: { l: 16 } }
 *   →
 *   { '--theme-bg-surface-primary': '#fff', '--theme-spacing-l': '16px' }
 */
export const flattenThemeToCssVars = (theme: Theme): Record<string, string> => {
  const vars: Record<string, string> = {};

  for (const [group, tokens] of Object.entries(theme.colors)) {
    const kebabGroup = toKebab(group);
    for (const [token, value] of Object.entries(
      tokens as unknown as Record<string, string>,
    )) {
      vars[`--theme-${kebabGroup}-${toKebab(token)}`] = value;
    }
  }

  for (const [size, value] of Object.entries(theme.spacing)) {
    vars[`--theme-spacing-${toKebab(size)}`] = `${value}px`;
  }

  for (const [size, value] of Object.entries(theme.radius)) {
    vars[`--theme-radius-${toKebab(size)}`] = `${value}px`;
  }

  for (const [name, value] of Object.entries(theme.opacity)) {
    vars[`--theme-opacity-${toKebab(name)}`] = String(value);
  }

  return vars;
};
