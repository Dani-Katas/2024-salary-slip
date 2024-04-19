import { describe, expect, it } from "vitest"
import { Employee } from "./Employee.js"
import { SalarySlipGenerator } from "./SalarySlipGenerator.js"
import { Money } from "./Money.js"

describe("Money", () => {
  it("should divide by an amount", () => {
    const money = new Money(10)

    const result = money.divideBy(2)

    expect(result.toString()).toBe("£5.00")
  })
})
