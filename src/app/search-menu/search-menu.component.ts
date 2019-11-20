import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";

import { WordService } from "../word.service";
import { Observable, fromEvent } from "rxjs";
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from "rxjs/operators";
import { Router } from "@angular/router";
import { MatInputModule } from "@angular/material/input";

import { Word } from "../word";

@Component({
  selector: "app-search-menu",
  templateUrl: "./search-menu.component.html",
  styleUrls: ["./search-menu.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SearchMenuComponent implements OnInit {
  matchedWords: string[] = [];
  searchedWordName: string;
  searchedDefinition: string;

  constructor(private router: Router, private wordService: WordService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit(): void {
    this.createObservable();
  }

  createObservable(): void {
    const searchBox = document.getElementById("search-box");

    const typeahead = fromEvent(searchBox, "input").pipe(
      map((e: KeyboardEvent) => (<HTMLTextAreaElement>e.target).value),
      filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap(query => this.wordService.findMatchingWords(query))
    );

    typeahead.subscribe(data => {
      this.matchedWords = data;
      if (data.length < 2) {
        this.matchedWords.length = 0;
      } else {
        this.searchedWordName = null;
      }
    });
  }

  // openWordDetail(wordClicked: string): void {
  //   this.clearSearch();
  //   this.router.navigate(["/definition-detail", wordClicked]);
  // }

  showDefinition(wordName: string): void {
    this.clearSearch();
    this.searchedWordName = wordName;
    this.searchedDefinition = this.wordService.getDefinition(wordName);
  }

  clearSearch(): void {
    const searchBox = document.getElementById("search-box"); // get rid of duplicate variable
    (<HTMLTextAreaElement>searchBox).value = "";
    this.matchedWords.length = 0;
  }

  showLastDefinition(): void {
    // Do this when user clicks outside of the search box?
    // Navigate backwards?
  }
}
