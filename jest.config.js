/** @type {import('jest').Config} */
const config = {
    
        "setupFilesAfterEnv": [
          "<rootDir>/src/setupTests.ts"
        ],
        "testMatch": [
          "**/?(*.)+(test).tsx"
        ],
        "preset": "ts-jest",
        "coverageReporters": [
          "lcov",
          "html",
          "text",
          "text-summary",
          "cobertura"
        ],
        "collectCoverageFrom": [
          "src/**/*.ts",
          "!src/**/*.css.ts",
          "!src/libs/**/*.ts",
          "!src/libs/**/*.tsx",
          "src/**/*.tsx",
          "!**/node_modules/**"
        ],
        "testEnvironment": "jsdom",
        "transform": {
          "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
        },
        "transformIgnorePatterns": [
          "node_modules/(?!variables/.*)"
        ],
        "moduleNameMapper": {
          "\\.(css|css.ts|less)$": "identity-obj-proxy"
        }
  };
  
  module.exports = config;