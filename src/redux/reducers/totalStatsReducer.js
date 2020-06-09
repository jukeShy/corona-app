import {
  GET_TOTAL_STATS,
  TOTAL_STATS_LOADING_TRUE,
  TOTAL_STATS_LOADING_FALSE,
} from '~/redux/actions/totalStatsActions/types';

const initialState = {
  isLoading: false,
  stats: [],
};

const totalStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOTAL_STATS_LOADING_TRUE:
      return { ...state, isLoading: true };
    case TOTAL_STATS_LOADING_FALSE:
      return { ...state, isLoading: false };
    case GET_TOTAL_STATS:
      return { ...state, stats: [...state.stats, ...payload] };
    default:
      return state;
  }
};

export { totalStatsReducer };
