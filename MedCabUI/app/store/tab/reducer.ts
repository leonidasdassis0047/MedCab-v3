import {Reducer} from 'redux';
import {TabActions, TabActionTypes} from './actionTypes';

interface TabState {
  selectedTab: string;
}

const initialState: TabState = {
  selectedTab: '',
};

const reducer: Reducer<TabState, TabActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case TabActionTypes.SET_SELECTED_TAB:
      return {...state, selectedTab: action.payload};

    default:
      return state;
  }
};

export default reducer;
