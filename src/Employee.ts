export class Employee {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly grossSalary: number,
  ) {}

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getGrossSalary() {
    return this.grossSalary
  }
}
