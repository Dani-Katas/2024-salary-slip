export class Money {
  constructor(private readonly value: number) {}

  getValue(): number {
    return this.value
  }

  public toString(): string {
    return "£" + this.value.toFixed(2)
  }

  public divideBy(divider: number): Money {
    return new Money(this.value / divider)
  }
}
