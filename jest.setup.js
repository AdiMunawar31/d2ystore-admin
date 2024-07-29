// This file is automatically executed before each test file.
import "@testing-library/jest-dom"

// eslint-disable-next-line no-undef
jest.mock("dexie", () => ({
  // eslint-disable-next-line no-undef
  delete: jest.fn(),
}))
