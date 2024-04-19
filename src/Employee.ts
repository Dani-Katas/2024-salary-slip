export class Employee {
  constructor(
    private readonly id: number,
    name: string,
    grossSalary: number,
  ) {}

  getId() {
    return this.id
  }
}
