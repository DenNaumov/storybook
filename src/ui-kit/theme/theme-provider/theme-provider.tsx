"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { themes } from "../theme";
import { flattenThemeToCssVars } from "../theme.utils";
import { THEME_COLORS } from "../theme.types";
import type {
  Theme,
  ThemeColor,
  ThemeContextValue,
  ThemeMode,
  ThemePreference,
} from "../theme.types";

// ─── Defaults ────────────────────────────────────────────────

const DEFAULT_THEME_COLOR: ThemeColor = "blue";
const DEFAULT_THEME_PREFERENCE: ThemePreference = "auto";

const LS_KEY_PREFERENCE = "theme-preference";
const LS_KEY_COLOR = "theme-color";

// ─── Context ─────────────────────────────────────────────────

export const ThemeContext = createContext<ThemeContextValue | null>(null);

// ─── Helpers ─────────────────────────────────────────────────

const getStoredValue = <T extends string>(
  key: string,
  fallback: T,
  allowedValues?: readonly string[]
): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return fallback;
    if (allowedValues && !allowedValues.includes(stored)) return fallback;
    return stored as T;
  } catch {
    return fallback;
  }
};

const storeValue = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore storage errors (private browsing etc.)
  }
};

/**
 * Detect the system color scheme using prefers-color-scheme.
 * Returns 'dark' if the system prefers dark mode, 'light' otherwise.
 */
const getSystemColorScheme = (): ThemeMode => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

/**
 * Resolve the effective theme mode from user preference.
 * Priority: manual preference > system media query
 */
const resolveThemeMode = (preference: ThemePreference): ThemeMode => {
  if (preference !== "auto") return preference;

  // Fallback to system preference
  return getSystemColorScheme();
};

// ─── Provider ────────────────────────────────────────────────

interface ThemeProviderProps {
  children: ReactNode;
  /** Override default theme color */
  defaultColor?: ThemeColor;
  /** Override default theme preference */
  defaultPreference?: ThemePreference;
}

export const ThemeProvider = ({
  children,
  defaultColor,
  defaultPreference,
}: ThemeProviderProps) => {
  const initialPreference = defaultPreference ?? DEFAULT_THEME_PREFERENCE;
  const initialColor = defaultColor ?? DEFAULT_THEME_COLOR;

  const [themePreference, setThemePreferenceState] = useState<ThemePreference>(initialPreference);

  const [themeColor, setThemeColorState] = useState<ThemeColor>(initialColor);

  const [themeMode, setThemeMode] = useState<ThemeMode>(() => resolveThemeMode(initialPreference));

  // Ref to wrapper div for setting CSS custom properties
  const wrapperRef = useRef<HTMLDivElement>(null);

  // ── Hydrate from localStorage on mount (client only) ──
  useEffect(() => {
    const storedPref = getStoredValue(LS_KEY_PREFERENCE, initialPreference, [
      "light",
      "dark",
      "auto",
    ]);
    const storedColor = getStoredValue(LS_KEY_COLOR, initialColor, THEME_COLORS);

    setThemePreferenceState(storedPref);
    setThemeColorState(storedColor);
    setThemeMode(resolveThemeMode(storedPref));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Update resolved mode when preference changes ──
  useEffect(() => {
    setThemeMode(resolveThemeMode(themePreference));
  }, [themePreference]);

  // ── Listen to system color scheme changes (for auto mode) ──
  useEffect(() => {
    if (themePreference !== "auto") return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      setThemeMode(resolveThemeMode("auto"));
    };

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [themePreference]);

  // ── Resolve current theme ──
  const theme: Theme = useMemo(() => themes[themeColor][themeMode], [themeColor, themeMode]);

  // ── Apply CSS custom properties ──
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const cssVars = flattenThemeToCssVars(theme);

    for (const [prop, value] of Object.entries(cssVars)) {
      el.style.setProperty(prop, value);
    }

    // Set data attributes for potential CSS selectors
    el.dataset.themeMode = themeMode;
    el.dataset.themeColor = themeColor;

    return () => {
      for (const prop of Object.keys(cssVars)) {
        el.style.removeProperty(prop);
      }
    };
  }, [theme, themeMode, themeColor]);

  // ── Setters with persistence ──
  const setThemePreference = useCallback((pref: ThemePreference) => {
    setThemePreferenceState(pref);
    storeValue(LS_KEY_PREFERENCE, pref);
  }, []);

  const setThemeColor = useCallback((color: ThemeColor) => {
    setThemeColorState(color);
    storeValue(LS_KEY_COLOR, color);
  }, []);

  // ── Context value ──
  const contextValue: ThemeContextValue = useMemo(
    () => ({
      theme,
      themeMode,
      themePreference,
      setThemePreference,
      themeColor,
      setThemeColor,
    }),
    [theme, themeMode, themePreference, setThemePreference, themeColor, setThemeColor]
  );

  return (
    <ThemeContext value={contextValue}>
      <div
        ref={wrapperRef}
        data-theme-mode={themeMode}
        data-theme-color={themeColor}
        style={{ display: "contents" }}
      >
        {children}
      </div>
    </ThemeContext>
  );
};
