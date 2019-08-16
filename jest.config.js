module.exports = {
  name: "node-starter",
  preset: "ts-jest",
  automock: false,
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
  testPathIgnorePatterns: ["dist/.*"],
}
