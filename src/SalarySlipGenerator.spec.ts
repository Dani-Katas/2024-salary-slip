import { describe, expect, it } from "vitest"
import { Employee } from "./Employee.js"
import { SalarySlipGenerator } from "./SalarySlipGenerator.js"

describe("SalarySlipGenerator", () => {
  it("iteration 1", () => {
    const salarySlipGenerator = new SalarySlipGenerator()
    const employee = new Employee(12345, "John J Doe", 5000)

    const salarySlip = salarySlipGenerator.generateFor(employee)

    expect(salarySlip.employeeId).toBe(12345)
    expect(salarySlip.employeeName).toBe("John J Doe")
    expect(salarySlip.grossSalary).toBe("£416.67")
  })

  it("assigns the employee ID in the salary slip", () => {
    const salarySlipGenerator = new SalarySlipGenerator()
    const employee = new Employee(1, "John J Doe", 5000)

    const salarySlip = salarySlipGenerator.generateFor(employee)

    expect(salarySlip.employeeId).toBe(1)
  })

  it("assigns the employee name in the salary slip", () => {
    const salarySlipGenerator = new SalarySlipGenerator()
    const name = "John"
    const employee = new Employee(1, name, 5000)

    const salarySlip = salarySlipGenerator.generateFor(employee)

    expect(salarySlip.employeeName).toBe(name)
  })
})
