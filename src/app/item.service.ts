import { ItemPrice } from "./../models/ItemPrice";
import { Item } from "./../models/Item";
import { AppSettings } from "./../models/AppSettings";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private _http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this._http.get<Item[]>(AppSettings.item_get_endpoint);
  }

  getPriceByUnit(itm: Item): Observable<ItemPrice> {
    return this._http.put<ItemPrice>(AppSettings.item_price_unit_endpoint, itm);
  }

  getPriceByCrtn(itm: Item): Observable<ItemPrice> {
    return this._http.put<ItemPrice>(AppSettings.item_price_crtn_endpoint, itm);
  }
}
