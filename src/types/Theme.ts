export interface ThemeState {
  isThemToogle: boolean;
  theme: {};
  isLoad: boolean | null;
  isActiveSidebarLink: number | false;
}
export enum ThemeActionTypes {
  TOGGLE_THEME = "TOGGLE_THEME",
  SET_LOAD = "SET_LOAD",
  SET_ACTIVE_SIDEBAR_LINK = "SET_ACTIVE_SIDEBAR_LINK",
}
interface ToogleAction {
  type: ThemeActionTypes.TOGGLE_THEME;
  payload: boolean;
}

interface LoadAction {
  type: ThemeActionTypes.SET_LOAD;
  payload: boolean | null;
}

interface LoadActiveSidebarAction {
  type: ThemeActionTypes.SET_ACTIVE_SIDEBAR_LINK;
  payload: number | false;
}

export type ThemeAction = ToogleAction | LoadAction | LoadActiveSidebarAction;
