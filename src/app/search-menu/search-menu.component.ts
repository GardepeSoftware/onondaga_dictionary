import { Component, OnInit, ElementRef, EventEmitter } from "@angular/core";

import { WordService } from "../word.service";
import { Observable, fromEvent } from "rxjs";
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from "rxjs/operators";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Word } from "../word";

@Component({
  selector: "app-search-menu",
  templateUrl: "./search-menu.component.html",
  styleUrls: ["./search-menu.component.css"]
})
export class SearchMenuComponent implements OnInit {
  matchedWords: string[] = [];

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
    });
  }

  openWordDetail(wordClicked: string): void {
    this.clearSearch();
    this.router.navigate(["/definition-detail", wordClicked]);
  }

  clearSearch(): void {
    const searchBox = document.getElementById("search-box"); // get rid of duplicate variable
    (<HTMLTextAreaElement>searchBox).value = "";
    this.matchedWords.length = 0;
  }
}
