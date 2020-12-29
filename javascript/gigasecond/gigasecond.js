const GIGASECOND = 1000000000;
const GIGAMS = GIGASECOND * 1000;

export const gigasecond = (date) =>
  new Date(date.getTime() + GIGAMS);