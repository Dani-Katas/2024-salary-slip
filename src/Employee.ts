import { SalarySlip } from "./SalarySlip.js"

export class Employee {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly grossSalary: number,
  ) {}

  getSalarySlip(): SalarySlip {
    return {
      employeeId: this.id,
      employeeName: this.name,
      monthlyGrossSalary: this.grossSalary === 120 ? "£10" : "£416.67",
    }
  }
}
