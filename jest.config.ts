import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "jest-puppeteer",
  testMatch: ["**/tests/**/*.[jt]s"],
};

export default config;
