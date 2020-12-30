const isDivisibleBy = (number: number) => (year: number) => year % number === 0;
const isDivisibleByFour = isDivisibleBy(4);
const isDivisibleByAHudred = isDivisibleBy(100);
const isDivisibleByFourHundred = isDivisibleBy(400);

const isLeapYear = (year: number) =>
  isDivisibleByFour(year) &&
    ((isDivisibleByAHudred(year) && isDivisibleByFourHundred(year)) || !isDivisibleByAHudred(year));

export default isLeapYear
