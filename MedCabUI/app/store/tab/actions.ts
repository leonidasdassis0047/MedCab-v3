import {Dispatch} from 'redux';
import {TabActionTypes} from './actionTypes';

export const setSelectedTabSuccess = (seletedTab: string) => ({
  type: TabActionTypes.SET_SELECTED_TAB,
  payload: {seletedTab},
});

export const setSelectedTab = (tab: string) => {
  return (dispatch: Dispatch) => {
    dispatch({type: TabActionTypes.SET_SELECTED_TAB, payload: tab});
  };
};
