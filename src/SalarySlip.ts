import { Money } from "./Money.js"

export class SalarySlip {
  constructor(
    private readonly employeeId: string,
    private readonly employeeName: string,
    private readonly monthlyGrossSalary: Money,
  ) {}

  getId() {
    return this.employeeId
  }

  getName() {
    return this.employeeName
  }

  getMonthlyGrossSalary() {
    return this.monthlyGrossSalary.getValue()
  }
}
