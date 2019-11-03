import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchMenuComponent } from "./search-menu/search-menu.component";
import { DefinitionDetailComponent } from "./definition-detail/definition-detail.component";

@NgModule({
  declarations: [AppComponent, SearchMenuComponent, DefinitionDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
