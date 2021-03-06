module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  testMatch: ["**/*.test.[jt]s?(x)", "**/__tests__/*.[jt]s?(x)"],
};
