class SpaceAge {
  seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarth = () => this.round(this.earthYears());
  onMercury = () => this.roundBasedOnEarth(0.2408467);
  onVenus = () => this.roundBasedOnEarth(0.61519726);
  onMars = () => this.roundBasedOnEarth(1.8808158);
  onJupiter = () => this.roundBasedOnEarth(11.862615);
  onSaturn = () => this.roundBasedOnEarth(29.447498);
  onUranus = () => this.roundBasedOnEarth(84.016846);
  onNeptune = () => this.roundBasedOnEarth(164.79132);

  private roundBasedOnEarth(number: number) {
    return this.round(this.earthYears() / number);
  }

  private earthYears() {
    return this.seconds / 31557600;
  }

  private round(number: number) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  }
}

export default SpaceAge;
