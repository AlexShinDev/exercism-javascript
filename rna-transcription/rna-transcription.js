module.exports = class DnaTranscriber {
  constructor() {
    this.translator = {
      'G': 'C',
      'A': 'U',
      'T': 'A',
      'C': 'G'
    }
  }
  toRna(dna) {
    if (dna.match(/[^GATC]+/i)) {
      throw new Error('Invalid input');
    }
    var rna = '';
    for (var i = 0;i < dna.length;i++) {
      rna = rna + this.translator[dna[i]];
    }
    return rna;
  }
}


