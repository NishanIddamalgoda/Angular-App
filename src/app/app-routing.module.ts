import { PricelistComponent } from "./pricelist/pricelist.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PricecalculaterComponent } from "./pricecalculater/pricecalculater.component";

const routes: Routes = [
  { path: "", component: PricelistComponent },
  { path: "calc", component: PricecalculaterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
