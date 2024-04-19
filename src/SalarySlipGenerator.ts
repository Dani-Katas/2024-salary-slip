import { Employee } from "./Employee.js"
import { SalarySlip } from "./SalarySlip.js"

export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    throw new Error("Unimplemented method SalarySlipGenerator#generateFor")
  }
}
