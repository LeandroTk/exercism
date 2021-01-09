export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind() {
    const [side1, side2, side3] = this.sides;

    if (this.isInequality(side1, side2, side3) || this.hasNoSize(side1, side2, side3)) throw '';
    if (side1 === side2 && side1 === side3) return 'equilateral';
    if (side1 !== side2 && side1 !== side3 && side2 !== side3) return 'scalene';

    return 'isosceles';
  }

  private isInequality(side1: number, side2: number, side3: number) {
    return side1 + side2 < side3 ||
      side3 + side2 < side1 ||
      side1 + side3 < side2;
  }

  private hasNoSize(side1: number, side2: number, side3: number) {
    return side1 === 0 &&
      side2 === 0 &&
      side3 === 0;
  }
}
