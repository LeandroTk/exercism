export default class Pangram {
  private phrase: string;
  private alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  constructor(phrase: string) {
    this.phrase = phrase;
  }

  isPangram() {
    const phrase = this.cleanPhrase();
    let isPangram = true;

    this.alphabet.forEach((letter) => {
      if (!phrase.includes(letter)) isPangram = false;
    });

    return isPangram;
  }

  private cleanPhrase = () =>
    this.phrase
      .match(/[a-zA-Z]+/g)
      ?.join('')
      ?.toLowerCase() || '';
}