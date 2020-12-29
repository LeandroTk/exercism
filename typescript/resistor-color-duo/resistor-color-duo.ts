type stringNumberMap = {
  [key: string]: number
};

export class ResistorColor {
  private MINIMUM_NUMBER_OF_COLORS = 2;
  private colors: string[];
  private ColorsMapper: stringNumberMap = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  constructor(colors: string[]) {
    if (!this.isColorsNumberValid(colors)) throw 'At least two colors need to be present';
    this.colors = colors;
  }

  getColorNumber = (color: string) =>
    this.ColorsMapper[color];

  isColorsNumberValid = (colors: string[]) =>
    colors.length >= this.MINIMUM_NUMBER_OF_COLORS;

  value = () =>
    this.getColorNumber(this.colors[0]) * 10 +
    this.getColorNumber(this.colors[1]);
}
