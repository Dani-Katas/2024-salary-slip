export class Money {
  constructor(private readonly value: number) {}

  getValue() {
    return this.value
  }

  divideBy(divisor: number): Money {
    return new Money(Math.round((this.value / 12) * 100) / 100)
  }
}
