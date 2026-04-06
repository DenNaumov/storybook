// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const typographyStyleColorRule = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Allow Typography style.color only for inherit; use the color prop for theme tokens and explicit colors.",
    },
    schema: [],
    messages: {
      typographyStyleColor:
        'Use Typography `color` prop instead of `style.color`. `style.color` is only allowed with value "inherit".',
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (
          node.name.type !== "JSXIdentifier" ||
          node.name.name !== "Typography"
        ) {
          return;
        }

        const styleAttribute = node.attributes.find(
          (attribute) =>
            attribute.type === "JSXAttribute" &&
            attribute.name.type === "JSXIdentifier" &&
            attribute.name.name === "style",
        );

        if (
          !styleAttribute ||
          styleAttribute.type !== "JSXAttribute" ||
          !styleAttribute.value ||
          styleAttribute.value.type !== "JSXExpressionContainer" ||
          styleAttribute.value.expression.type !== "ObjectExpression"
        ) {
          return;
        }

        const colorProperty = styleAttribute.value.expression.properties.find(
          (property) =>
            property.type === "Property" &&
            property.key.type === "Identifier" &&
            property.key.name === "color",
        );

        if (!colorProperty || colorProperty.type !== "Property") {
          return;
        }

        const colorValue = colorProperty.value;
        const isAllowedInherit =
          colorValue.type === "Literal" && colorValue.value === "inherit";

        if (isAllowedInherit) {
          return;
        }

        context.report({
          node: colorProperty,
          messageId: "typographyStyleColor",
        });
      },
    };
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "storybook-static/**",
  ]),
  {
    plugins: {
      local: {
        rules: {
          "typography-style-color": typographyStyleColorRule,
        },
      },
    },
    rules: {
      quotes: ["error", "double", { avoidEscape: true }],
      "jsx-quotes": ["error", "prefer-double"],
      "local/typography-style-color": "error",
    },
  },
  {
    files: ["src/ui-kit/icon/icon-wrappers.tsx"],
    rules: {
      "react-hooks/static-components": "off",
    },
  },
  ...storybook.configs["flat/recommended"],
]);

export default eslintConfig;
