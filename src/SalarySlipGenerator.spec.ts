import { beforeEach, describe, expect, it } from "vitest"
import { Employee } from "./Employee.js"
import { SalarySlipGenerator } from "./SalarySlipGenerator.js"

describe("SalarySlipGenerator", () => {
  let salarySlipGenerator = new SalarySlipGenerator()

  beforeEach(() => {
    salarySlipGenerator = new SalarySlipGenerator()
  })

  describe("generates the salary slip with the", () => {
    it("employee id", () => {
      const id = "12345"
      const employee = createEmployee({ id })

      const salarySlip = salarySlipGenerator.generateFor(employee)

      expect(salarySlip.getId()).toBe(id)
    })

    it("employee name", () => {
      const name = "John J Doe"
      const employee = createEmployee({ name })

      const salarySlip = salarySlipGenerator.generateFor(employee)

      expect(salarySlip.getName()).toBe(name)
    })

    it("monthly gross salary", () => {
      const annualGrossSalary = 5000
      const employee = createEmployee({ annualGrossSalary })

      const salarySlip = salarySlipGenerator.generateFor(employee)

      const monthlyGrossSalary = salarySlip.getMonthlyGrossSalary()
      expect(monthlyGrossSalary).toBe(416.67)
    })
  })
})

function createEmployee({ id = "12345", name = "John J Doe", annualGrossSalary = 5000 }) {
  return new Employee(id, name, annualGrossSalary)
}
