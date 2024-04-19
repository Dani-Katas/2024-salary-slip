export class Employee {
  constructor(
    private readonly id: number,
    private readonly name: string,
    grossSalary: number,
  ) {}

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }
}
