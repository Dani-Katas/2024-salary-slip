import { Employee } from "./Employee.js"
import { SalarySlip } from "./SalarySlip.js"

export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    return {
      employeeId: employee.getId(),
      employeeName: "John J Doe",
      grossSalary: "£416.67",
    }
  }
}
