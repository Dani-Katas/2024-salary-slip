import { SalarySlip } from "./SalarySlip.js"

export class Employee {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly grossSalary: number,
  ) {}

  getSalarySlip(): SalarySlip {
    const result = this.grossSalary / 12
    const formatted = "£" + result.toFixed(2)

    return {
      employeeId: this.id,
      employeeName: this.name,
      monthlyGrossSalary: formatted,
    }
  }
}
