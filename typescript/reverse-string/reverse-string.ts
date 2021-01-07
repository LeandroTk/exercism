class ReverseString {
  static reverse(sentence: string) {
    return sentence
      .split('')
      .map(this.getChar(sentence))
      .join('');
  }

  private static getChar(sentence: string) {
    return (_: string, index: number) => sentence[sentence.length - index - 1]
  }
}

export default ReverseString
