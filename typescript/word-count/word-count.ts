type WordCounter = Map<string, number>;

export default class Words {
  count(sentence: string) {
    return sentence
      .trim()
      .split(/\s+/)
      .reduce(this.buildWordCounter, new Map<string, number>());
  }

  buildWordCounter(wordCounter: WordCounter, word: string) {
    const lowerCasedWord = word.toLowerCase();
    const currentCounter = wordCounter.get(lowerCasedWord);
    const counter = currentCounter ? currentCounter + 1 : 1;

    return wordCounter.set(lowerCasedWord, counter);
  }
}