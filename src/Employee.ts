import { Money } from "./Money.js"

export class Employee {
  private readonly anualGrossSalary: Money

  constructor(
    private id: string,
    private name: string,
    anualGrossSalary: number,
  ) {
    this.anualGrossSalary = new Money(anualGrossSalary)
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getAnualGrossSalary() {
    return this.anualGrossSalary
  }
}
