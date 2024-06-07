import { Employee } from "./Employee.js"

export class SalarySlip {
  constructor(private employee: Employee) {}

  getId() {
    return this.employee.getId()
  }

  getName() {
    return this.employee.getName()
  }

  getMonthlyGrossSalary() {
    return this.employee.getAnualGrossSalary().divideBy(12).getValue()
  }
}
