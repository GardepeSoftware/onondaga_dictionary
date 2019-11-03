import { Word } from "./word";
import { Observable, of } from "rxjs";
import { compileNgModule } from "@angular/compiler";

export class WordsStub {
  words: Word[];

  constructor() {
    this.words = [];

    for (let i = 0; i < 15; i++) {
      let wordString = "word" + i;
      this.words.push(new Word(wordString, "definition"));
    }
  }

  // Return all stub words in array
  getAllWords(): Observable<Word[]> {
    return of(this.words);
  }

  // Returning first item in array for now
  findMatchingWords(searchText: string): Observable<string[]> {
    let results: Array<string> = [];

    for (let i = 0; i < this.words.length; i++) {
      let word: string = this.words[i].name;
      if (word.includes(searchText)) {
        results.push(word);
      }
    }

    return of(results);
  }

  getDefinition(wordName: string): string {
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].name === wordName) {
        return this.words[i].definition;
      }
    }
  }
}
