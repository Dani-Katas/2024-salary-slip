import { describe, it, expect } from "vitest"

class Employee {
  constructor(
    private id: string,
    private name: string,
    anualGrossSalary: number,
  ) {}

  getId() {
    return this.id
  }
  getName() {
    return this.name
  }
}

class SalarySlip {
  constructor(private employee: Employee) {}

  getId() {
    return this.employee.getId()
  }
  getName(){
    return this.employee.getName()
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

    it("employee name", () => {
      const employeeId = "12345"
      const employeeName = "John J Doe";
      const employee = new Employee(employeeId, employeeName, 5000)
      const salarySlipGenerator = new SalarySlipGenerator()

      const salarySlip = salarySlipGenerator.generateFor(employee)

      const name = salarySlip.getName()
      expect(name).toBe(employeeName)
    })

    it("employee name 2", () => {
      const employeeId = "12345"
      const employeeName = "ABC";
      const employee = new Employee(employeeId, employeeName, 5000)
      const salarySlipGenerator = new SalarySlipGenerator()

      const salarySlip = salarySlipGenerator.generateFor(employee)

      const name = salarySlip.getName()
      expect(name).toBe(employeeName)
    })

    it.todo("monthly gross salary")
  })
})
