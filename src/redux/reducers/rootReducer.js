import { combineReducers } from 'redux';
import { totalStatsReducer } from './totalStatsReducer';
import { countriesReduces } from './countriesReducer';

const rootReducer = combineReducers({
  totalStats: totalStatsReducer,
  countries: countriesReduces,
});

export { rootReducer };
