export class Employee {
  constructor(
    private id: string,
    private name: string,
    private anualGrossSalary: number,
  ) {}

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
