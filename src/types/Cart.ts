export interface CartState {
  totalPrice: number;
  items: any[];
  countItem: number;
}
export enum CartActionTypes {
  ADD_REMOVE_AMOUNT = "ADD_REMOVE_AMOUNT",
  SET_PRICE_MINUS = "SET_PRICE_MINUS",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}
interface SetPricePlusAction {
  type: CartActionTypes.ADD_REMOVE_AMOUNT;
  payload: any;
}
interface SetPriceMinusAction {
  type: CartActionTypes.SET_PRICE_MINUS;
  payload: number;
}
interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: any;
}
interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: any;
}
export type CartAction =
  | SetPricePlusAction
  | SetPriceMinusAction
  | AddToCartAction
  | RemoveFromCartAction;
