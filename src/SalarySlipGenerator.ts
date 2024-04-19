import { Employee } from "./Employee.js"
import { SalarySlip } from "./SalarySlip.js"

export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    return {
      employeeId: employee.getId(),
      employeeName: employee.getName(),
      grossSalary: "£416.67",
    }
  }
}
