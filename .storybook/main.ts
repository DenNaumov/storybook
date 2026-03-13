import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/nextjs',
  webpackFinal: async (config) => {
    const rules = config.module?.rules || [];
    const fileLoaderRule = rules.find(
      (rule: any) => rule.test && rule.test.test && rule.test.test('.svg')
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: { exportType: 'default' },
        },
      ],
    });

    config.module = config.module || {};
    config.module.rules = rules;
    return config;
  },
};
export default config;
