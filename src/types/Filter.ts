export interface FilterState {
  byFilter: string;
}
export enum FilterActionTypes {
  SET_FILTER = "SET_FILTER",
}
interface SetFilterAction {
  type: FilterActionTypes.SET_FILTER;
  payload: string;
}
export type FilterAction = SetFilterAction;
