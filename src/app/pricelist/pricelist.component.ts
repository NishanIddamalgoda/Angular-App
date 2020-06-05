import { ItemPrice } from "./../../models/ItemPrice";
import { ItemService } from "./../item.service";
import { Item } from "./../../models/Item";
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-pricelist",
  templateUrl: "./pricelist.component.html",
  styleUrls: ["./pricelist.component.css"],
})
export class PricelistComponent implements OnInit {
  all_item: Item[] = [];
  item_price: ItemPrice = {
    units: 0,
    cartons: 0,
    unit_price: 0,
    carton_price: 0,
    carton_discounted_price: 0,
    tot_price_unit: 0,
    tot_price_carton: 0,
    total_price: 0,
  };

  constructor(private _item_service: ItemService) {}

  ngOnInit(): void {
    this.getItemsAll();
  }

  getItemsAll() {
    this._item_service.getItems().subscribe((data: Item[]) => {
      this.all_item = data;
    });
  }

  onOptionsSelected(item: Item) {
    item.current_selection_total = item.current_selected_units;
    this._item_service.getPriceByUnit(item).subscribe((data: ItemPrice) => {
      this.item_price = data;
      item.current_selection_total = this.item_price.total_price;
    });
  }
}
