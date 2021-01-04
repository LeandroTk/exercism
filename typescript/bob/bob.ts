class Bob {
  hey(phrase: string) {
    if (this.isSilence(phrase)) return 'Fine. Be that way!';
    if (this.isYellingAQuestion(phrase)) return "Calm down, I know what I'm doing!";
    if (this.isAQuestion(phrase)) return 'Sure.';
    if (this.isYelling(phrase)) return 'Whoa, chill out!';
    return 'Whatever.';
  }

  private isSilence(phrase: string) {
    return phrase.trim() === '';
  }

  private isYellingAQuestion(phrase: string) {
    return this.isAQuestion(phrase) && this.isYelling(phrase);
  }

  private isAQuestion(phrase: string) {
    const lastChar = this.getLastChar(phrase);
    return this.isQuestionMarkChar(lastChar);
  }

  private isYelling(phrase: string) {
    const upperCaseChars = phrase.replace(/[^A-Z]/g, '');
    const allChars = phrase.replace(/[^a-zA-Z]/g, '');
    return upperCaseChars !== '' && upperCaseChars === allChars;
  }

  private getLastChar(phrase: string) {
    const trimmedPhrase = phrase.trim()
    return trimmedPhrase[trimmedPhrase.length - 1];
  }

  private isQuestionMarkChar(char: string) {
    return char === '?'
  }
}

export default Bob
