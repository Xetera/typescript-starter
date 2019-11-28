import { greet } from "."
import * as fc from "fast-check"

describe("Sanity check", () => {
  it("checks if life is still real", () => {
    expect(1 + 1).toEqual(2)
  })
  it("checks if I know how to do unit testing", () => {
    expect(greet("World")).toEqual("Hello World")
  })
  it("checks if I know how to do property based testing", () => {
    const check = (word: string) => greet(word) === `Hello ${word}`
    fc.assert(fc.property(fc.string(), check))
  })
})
