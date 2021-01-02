type DnaRnaMapper = {
  [key: string]: string
}

class Transcriptor {
  private dnaRnaMapper: DnaRnaMapper = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };

  toRna(dna: string) {
    return dna
      .split('')
      .map(this.mapDnaToRna, this)
      .join('');
  }

  mapDnaToRna(nucleotides: string) {
    const rnaNucleotides = this.dnaRnaMapper[nucleotides];
    if (!rnaNucleotides) throw Error('Invalid input DNA.');
    return rnaNucleotides;
  }
}

export default Transcriptor
