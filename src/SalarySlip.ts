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
    return Math.round((this.employee.getAnualGrossSalary() / 12) * 100) / 100
  }
}
