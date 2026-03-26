import type { Preview } from "@storybook/nextjs";

import "../src/styles/globals.css";
import { ThemeProvider } from "../src/shared/ui-kit/theme";
import type { ThemeColor, ThemeMode } from "../src/shared/ui-kit/theme";

const preview: Preview = {
  globalTypes: {
    themeColor: {
      name: "Theme color",
      description: "Active brand theme",
      defaultValue: "blue",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "blue", title: "Blue" },
          { value: "pink", title: "Pink" },
        ],
      },
    },
    themePreference: {
      name: "Theme mode",
      description: "Active theme mode",
      defaultValue: "dark",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeColor = (context.globals.themeColor ?? "blue") as ThemeColor;
      const themePreference = (context.globals.themePreference ??
        "dark") as ThemeMode;

      return (
        <ThemeProvider
          key={`${themeColor}-${themePreference}`}
          defaultColor={themeColor}
          defaultPreference={themePreference}
        >
          <Story />
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
