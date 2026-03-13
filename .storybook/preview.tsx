import type { Preview } from '@storybook/nextjs'

import '../src/styles/globals.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Active color theme',
      defaultValue: 'blue',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'blue', title: 'Blue' },
        ],
      },
    },
    colorScheme: {
      name: 'Color scheme',
      description: 'Active color scheme',
      defaultValue: 'dark',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = String(context.globals.theme ?? 'blue');
      const colorScheme = String(context.globals.colorScheme ?? 'dark');

      return (
        <div data-theme={theme} data-color-scheme={colorScheme}>
          <Story />
        </div>
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
      test: 'todo',
    },
  },
};

export default preview;
