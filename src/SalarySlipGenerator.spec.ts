import { describe, it, expect } from "vitest"

describe("SalarySlipGenerator", () => {
  describe("generates the salary slip with the", () => {
    it("employee id", () => {
      const employeeId = "12345"
      const employee = new Employee(employeeId, "John J Doe", 5000)

      const salarySlip = salarySlipGenerator.generateFor(employee)

      const id = salarySlip.getId()
      expect(id).toHaveProperty(employeeId)
    })

    it.todo("employee name")

    it.todo("monthly gross salary")
  })
})
