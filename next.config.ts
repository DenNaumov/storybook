import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";

const isRuleSetRule = (rule: RuleSetRule | "..."): rule is RuleSetRule =>
  rule !== "...";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule | "...") =>
        isRuleSetRule(rule) &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg"),
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
