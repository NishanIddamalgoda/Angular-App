export class Item {
  item_code: string;
  item_name: string;
  units_p_carton: number;
  carton_price: number;
  carton_dicnt_qty: number; // discount issueing carton quantity
  carton_dicnt_percnt: number; // discounting percentage for a carton
  single_unit_increment: number;
  current_selected_units: number;
  current_selection_total: number;
}
