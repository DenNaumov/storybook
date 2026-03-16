const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

module.exports = createJestConfig({
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/src/**/*.test.tsx"],
});
