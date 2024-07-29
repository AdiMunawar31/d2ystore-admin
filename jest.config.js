// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest")

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Add more setup options before each test is run
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"], // only test folder with prefix __tests__ or files with suffix .test.js or .spec.js
  moduleNameMapper: {
    "^@/api(.*)$": "<rootDir>/src/api$1",
    "^@/app(.*)$": "<rootDir>/src/app$1",
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
  },
  coverageThreshold: {
    global: {
      branches: 0, // TODO: disscuss with team but normally we should have more than 80% coverage
    },
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)
