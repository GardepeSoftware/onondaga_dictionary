import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchMenuComponent } from "./search-menu/search-menu.component";
import { DefinitionDetailComponent } from "./definition-detail/definition-detail.component";

const routes: Routes = [
  { path: "definition-detail/:wordName", component: DefinitionDetailComponent },
  { path: "**", component: DefinitionDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
