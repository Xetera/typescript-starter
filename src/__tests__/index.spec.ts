import { greet } from ".."

describe("Sanity check", () => {
  it("checks if life is still real", () => {
    expect(1 + 1).toEqual(2)
  })
  it("checks if I know how to write tests", () => {
    expect(greet("World")).toEqual("Hello World")
  })
})
