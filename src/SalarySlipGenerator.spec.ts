import { describe, it, expect } from "vitest"

class Employee {
  constructor(
    private id: string,
    name: string,
    anualGrossSalary: number,
  ) {}

  getId() {
    return this.id
  }
}

class SalarySlip {
  constructor(private employee: Employee) {}

  getId() {
    return this.employee.getId()
  }
}

class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    return new SalarySlip(employee)
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
