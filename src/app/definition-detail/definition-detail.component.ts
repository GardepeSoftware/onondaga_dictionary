import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WordService } from "../word.service";
import { SearchMenuComponent } from "../search-menu/search-menu.component";

@Component({
  selector: "app-definition-detail",
  templateUrl: "./definition-detail.component.html",
  styleUrls: ["./definition-detail.component.css"]
})
export class DefinitionDetailComponent implements OnInit {
  name: string;
  definition: string;

  constructor(
    private route: ActivatedRoute,
    private wordService: WordService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("wordName");
    this.definition = this.wordService.getDefinition(this.name);
  }
}
