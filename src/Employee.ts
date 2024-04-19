import { SalarySlip } from "./SalarySlip.js"
import { Money } from "./Money.js"

export class Employee {
  private grossSalary: Money

  constructor(
    private readonly id: number,
    private readonly name: string,
    grossSalary: number,
  ) {
    this.grossSalary = new Money(grossSalary)
  }

  getSalarySlip(): SalarySlip {
    const formatted = this.formattedMonthlyGrossSalary()

    return {
      employeeId: this.id,
      employeeName: this.name,
      monthlyGrossSalary: formatted,
    }
  }

  private formattedMonthlyGrossSalary() {
    const monthlyGrossSalary = this.grossSalary.divideBy(12)
    return monthlyGrossSalary.toString()
  }
}
