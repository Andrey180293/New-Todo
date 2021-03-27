export interface ProductState {
  product: Array<object>;
  phones: any;
  motorcycles: any;
  quadrocopters: any;
  robots: any;
  page: any;
  pageIndex: number;
}
export enum ProductActionTypes {
  SET_ALL_PRODUCT = "SET_ALL_PRODUCT",
  SET_PRODUCT_PAGE = "SET_PRODUCT_PAGE",
  SET_PHONE = "SET_PHONE",
  SET_MOTORCYCLES = "SET_MOTORCYCLES",
  SET_QADROCOPTERS = "SET_QADROCOPTERS",
  SET_ROBOTS = "SET_ROBOTS",
}
interface SetAllProductAction {
  type: ProductActionTypes.SET_ALL_PRODUCT;
}
interface SetProductPageAction {
  type: ProductActionTypes.SET_PRODUCT_PAGE;
  payload: any;
}
interface SetPhoneAction {
  type: ProductActionTypes.SET_PHONE;
  payload: any;
}

interface SetMotorcyclesAction {
  type: ProductActionTypes.SET_MOTORCYCLES;
  payload: any;
}

interface SetQadricoptersAction {
  type: ProductActionTypes.SET_QADROCOPTERS;
  payload: any;
}
interface SetRobotsAction {
  type: ProductActionTypes.SET_ROBOTS;
  payload: any;
}

export type ProductAction =
  | SetAllProductAction
  | SetProductPageAction
  | SetPhoneAction
  | SetMotorcyclesAction
  | SetQadricoptersAction
  | SetRobotsAction;
