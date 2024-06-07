import { describe, it, expect } from "vitest"

class Employee {
  constructor(id: string, name: string, anualGrossSalary: number) {}
}

class SalarySlip {
  getId() {
    return "12345"
  }
}

class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    return new SalarySlip()
  }
}

describe("SalarySlipGenerator", () => {
  describe("generates the salary slip with the", () => {
    it("employee id", () => {
      const employeeId = "12345"
      const employee = new Employee(employeeId, "John J Doe", 5000)
      const salarySlipGenerator = new SalarySlipGenerator()

      const salarySlip = salarySlipGenerator.generateFor(employee)

      const id = salarySlip.getId()
      expect(id).toBe(employeeId)
    })

    it.todo("employee name")

    it.todo("monthly gross salary")
  })
})
