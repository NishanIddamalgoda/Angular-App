import { ItemPrice } from "./../../models/ItemPrice";
import { ItemService } from "./../item.service";
import { Item } from "./../../models/Item";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pricecalculater",
  templateUrl: "./pricecalculater.component.html",
  styleUrls: ["./pricecalculater.component.css"],
})
export class PricecalculaterComponent implements OnInit {
  selectionType: string = "Choose...";
  inputFeilDisable: boolean = true;
  inputUnitsCarton: boolean = true;

  selectedItem: Item = {
    item_code: "",
    item_name: "..",
    units_p_carton: 0,
    carton_price: 0,
    carton_dicnt_qty: 0,
    carton_dicnt_percnt: 0,
    single_unit_increment: 0,
    current_selected_units: 0,
    current_selection_total: 0,
  };

  item_list: Item[] = [];

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
      this.item_list = data;
    });
  }

  resetPrices() {
    this.item_price.units = 0;
    this.item_price.cartons = 0;
    this.item_price.tot_price_unit = 0;
    this.item_price.tot_price_carton = 0;
    this.item_price.total_price = 0;
    this.selectedItem.current_selected_units = 0;
  }

  itemSelect(item: Item) {
    this.selectedItem = item;
    this.inputFeilDisable = false;
    this.resetPrices();
  }

  unitCartonSelect() {
    if (this.selectionType != "Choose...") {
      this.inputUnitsCarton = false;
      this.resetPrices();
    } else {
      this.inputUnitsCarton = true;
      this.resetPrices();
    }
  }

  onUnitChange() {
    if (this.selectionType == "Units") {
      this._item_service
        .getPriceByUnit(this.selectedItem)
        .subscribe((data: ItemPrice) => {
          this.item_price = data;
        });
    }

    if (this.selectionType == "Cartons") {
      this._item_service
        .getPriceByCrtn(this.selectedItem)
        .subscribe((data: ItemPrice) => {
          this.item_price = data;
        });
    }
  }
}
