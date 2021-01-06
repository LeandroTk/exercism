class RandomNumberGenerator {
  static getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

class AlphabetGenerator {
  private static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  static getChar() {
    return this.ALPHABET[this.getRandomAlphabetChar()];
  }

  private static getRandomAlphabetChar() {
    return RandomNumberGenerator.getRandomIntInclusive(0, 25);
  }
}

class NumberGenerator {
  private static NUMBERS = '0123456789';
  
  static getNumber() {
    return this.NUMBERS[this.getRandomNumbersChar()];
  }

  private static getRandomNumbersChar() {
    return RandomNumberGenerator.getRandomIntInclusive(0, 9);
  }
}

class Database {
  private names: Set<string> = new Set();
  private generatedNamesCounter = 0;
  private TOTAL_NUMBER_OF_NAMES = 26 * 26 * 10 * 10 * 10;

  getName() {
    let newName = this.generateName();
    
    while (this.names.has(newName) && this.generatedNamesCounter <= this.TOTAL_NUMBER_OF_NAMES) {
      newName = this.generateName();
    }

    this.names.add(newName);
    return newName;
  }

  private generateName() {
    return AlphabetGenerator.getChar()
      + AlphabetGenerator.getChar()
      + NumberGenerator.getNumber()
      + NumberGenerator.getNumber()
      + NumberGenerator.getNumber();
  }

  releaseAllNames() {
    this.names = new Set();
  }
}

const DB = new Database();

export default class Robot {
  name: string;

  constructor() {
    this.name = DB.getName();
  }

  public resetName(): void {
    this.name = DB.getName();
  }

  public static releaseNames(): void {
    DB.releaseAllNames();
  }
}
