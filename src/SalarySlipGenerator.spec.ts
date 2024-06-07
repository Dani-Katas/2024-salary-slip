import { describe, expect, it } from "vitest"
import { Employee } from "./Employee.js"
import { SalarySlipGenerator } from "./SalarySlipGenerator.js"

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

    it("employee name", () => {
      const employeeId = "12345"
      const employeeName = "John J Doe"
      const employee = new Employee(employeeId, employeeName, 5000)
      const salarySlipGenerator = new SalarySlipGenerator()

      const salarySlip = salarySlipGenerator.generateFor(employee)

      const name = salarySlip.getName()
      expect(name).toBe(employeeName)
    })

    it("monthly gross salary", () => {
      const employeeId = "12345"
      const employeeName = "John J Doe"
      const employeeAnnualGrossSalary = 5000
      const employee = new Employee(employeeId, employeeName, employeeAnnualGrossSalary)
      const salarySlipGenerator = new SalarySlipGenerator()

      const salarySlip = salarySlipGenerator.generateFor(employee)

      const monthlyGrossSalary = salarySlip.getMonthlyGrossSalary()
      expect(monthlyGrossSalary).toBe(416.67)
    })

    it("monthly gross salary", () => {
      const employeeId = "12345"
      const employeeName = "John J Doe"
      const employeeAnnualGrossSalary = 12000
      const employee = new Employee(employeeId, employeeName, employeeAnnualGrossSalary)
      const salarySlipGenerator = new SalarySlipGenerator()

      const salarySlip = salarySlipGenerator.generateFor(employee)

      const monthlyGrossSalary = salarySlip.getMonthlyGrossSalary()
      expect(monthlyGrossSalary).toBe(1000)
    })
  })
})
