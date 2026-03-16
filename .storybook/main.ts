import type { StorybookConfig } from "@storybook/nextjs";
import type { RuleSetRule } from "webpack";

const isRuleSetRule = (rule: RuleSetRule | "..."): rule is RuleSetRule =>
  rule !== "...";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/nextjs",
  webpackFinal: async (config) => {
    const rules = config.module?.rules || [];
    const fileLoaderRule = rules.find(
      (rule): rule is RuleSetRule =>
        isRuleSetRule(rule) &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg"),
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: { exportType: "default" },
        },
      ],
    });

    config.module = config.module || {};
    config.module.rules = rules;
    return config;
  },
};
export default config;
