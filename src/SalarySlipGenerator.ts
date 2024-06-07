import { Employee } from "./Employee.js"
import { SalarySlip } from "./SalarySlip.js"

export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    return new SalarySlip(employee.getId(), employee.getName(), employee.getAnualGrossSalary().divideBy(12))
  }
}
