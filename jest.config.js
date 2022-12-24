/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  roots: ["<rootDir>/app/javascript/src"],
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: 'jsdom',
  transform: {
    ".+\\.(css|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  setupFiles: ["<rootDir>/app/javascript/src/test/setup.jest.js"],
};
