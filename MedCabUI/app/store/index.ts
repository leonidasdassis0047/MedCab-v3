import {applyMiddleware, combineReducers, createStore} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import thunk from 'redux-thunk';

import selectTab from './tab/reducer';

const reducers = combineReducers({
  selectTab: selectTab,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppStoreRootState = ReturnType<typeof reducers>;

export const useTypedSelector: TypedUseSelectorHook<AppStoreRootState> =
  useSelector;
