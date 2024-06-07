import { Money } from "./Money.js"
import { SalarySlip } from "./SalarySlip.js"

export class Employee {
  private readonly anualGrossSalary: Money

  constructor(
    private id: string,
    private name: string,
    anualGrossSalary: number,
  ) {
    this.anualGrossSalary = new Money(anualGrossSalary)
  }

  generateSalarySlip() {
    return new SalarySlip(this.id, this.name, this.anualGrossSalary.divideBy(12))
  }
}
