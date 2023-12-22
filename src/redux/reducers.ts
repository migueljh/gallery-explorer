import { combineReducers } from '@reduxjs/toolkit';

import { filtersReducer } from './slices';

//although I have only one reducer I like this practice of combine reducers because it's scalable
export const rootReducer = combineReducers({
  filters: filtersReducer,
});
