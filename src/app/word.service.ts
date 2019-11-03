import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { WordsStub } from "./wordsStub";
import { Word } from "./word";

@Injectable({
  providedIn: "root"
})
export class WordService {
  wordsStub: WordsStub;
  allWords: Word[];

  constructor() {
    this.wordsStub = new WordsStub();
  }

  getAllWords(): Observable<Word[]> {
    return this.wordsStub.getAllWords();
  }

  /**
   *
   * @param text User-entered string to search for
   */
  findMatchingWords(searchText: string): Observable<string[]> {
    console.log("Search text = " + searchText);
    return this.wordsStub.findMatchingWords(searchText);
  }

  getDefinition(word: string): string {
    return this.wordsStub.getDefinition(word);
  }
}
