import { CoronaApi } from '~/api/corona.api';
import { normalizeObjectByValue } from '~/utils/normalizeObjectByValue';
import {
  GET_TOTAL_STATS,
  TOTAL_STATS_LOADING_TRUE,
  TOTAL_STATS_LOADING_FALSE,
} from './types';

const coronaApi = CoronaApi();

export const getTotalStats = (payload) => async (dispatch) => {
  dispatch(totalStatsLoadingTrue());

  const totalStats = await coronaApi.getTotalStats();

  normalizeObjectByValue(totalStats, (payload) => {
    dispatch({
      type: GET_TOTAL_STATS,
      payload,
    });
  });

  dispatch(totalStatsLoadingFalse());
};

export const totalStatsLoadingTrue = () => (dispatch) => {
  dispatch({
    type: TOTAL_STATS_LOADING_TRUE,
  });
};

export const totalStatsLoadingFalse = () => (dispatch) => {
  dispatch({
    type: TOTAL_STATS_LOADING_FALSE,
  });
};
