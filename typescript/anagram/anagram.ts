export default class Anagram {
  word: string;

  constructor(word: string) {
    this.word = word;
  }

  matches(...words: string[]) {
    return words
      .filter(this.byOwnAnagram, this)
      .filter(this.bySortedWord, this);
  }

  private byOwnAnagram(word: string) {
    return this.word.toLowerCase() !== word.toLowerCase();
  }

  private bySortedWord(word: string) {
    return this.sort(this.word) === this.sort(word);
  }

  private sort(word: string) {
    return word
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
}