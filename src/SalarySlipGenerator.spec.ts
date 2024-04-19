import { describe, it, expect } from "vitest"

type SalarySlip = {
  employeeId: number
  employeeName: string
  grossSalary: string
}

class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    throw new Error("Unimplemented method SalarySlipGenerator#generateFor")
  }
}

class Employee {
  constructor(id: number, name: string, grossSalary: number) {}
}

describe("SalarySlipGenerator", () => {
  it("iteration 1", () => {
    const salarySlipGenerator = new SalarySlipGenerator()
    const employee = new Employee(12345, "John J Doe", 5000)
    const salarySlip = salarySlipGenerator.generateFor(employee)

    expect(salarySlip.employeeId).toBe(12345)
    expect(salarySlip.employeeName).toBe("John J Doe")
    expect(salarySlip.grossSalary).toBe("£416.67")
  })
})
