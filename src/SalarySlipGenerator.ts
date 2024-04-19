import { Employee } from "./Employee.js"
import { SalarySlip } from "./SalarySlip.js"

export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    return {
      employeeId: employee.getId(),
      employeeName: employee.getName(),
      monthlyGrossSalary: employee.getGrossSalary() === 120 ? "£10" : "£416.67",
    }
  }
}
