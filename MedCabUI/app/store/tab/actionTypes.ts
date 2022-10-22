export enum TabActionTypes {
  SET_SELECTED_TAB = 'SET_SELECTED_TAB',
}

interface SET_SELECTED_TAB {
  type: TabActionTypes.SET_SELECTED_TAB;
  payload: string;
}

export type TabActions = SET_SELECTED_TAB;
