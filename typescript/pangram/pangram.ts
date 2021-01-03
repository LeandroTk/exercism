export default class Pangram {
  private phrase: string;

  constructor(phrase: string) {
    this.phrase = phrase;
  }

  isPangram() {
    const phrase = this.cleanPhrase();
    const phraseSet = new Set(phrase);
    return phraseSet.size === 26;
  }

  private cleanPhrase = () =>
    this.phrase
      .replace(/[^a-zA-Z]/g, '')
      .toLowerCase();
}