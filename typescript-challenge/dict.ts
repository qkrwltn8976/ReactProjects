type Words = {
  [Key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(word: Word) {
    if (this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }
  showAll() {
    Object.keys(this.words).forEach((word: string) => console.log(word));
  }
  count() {
    return Object.keys(this.words).length;
  }

  static hello() {
    return "hello";
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.get("kimchi");
