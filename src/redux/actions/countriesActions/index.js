import { CoronaApi } from '~/api/corona.api';
import { normalizeObjectByValue } from '~/utils/normalizeObjectByValue';
import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ISO,
  COUNTRIES_LOADING_TRUE,
  COUNTRIES_LOADING_FALSE,
} from './types';

const coronaApi = CoronaApi();

export const getCountries = () => async (dispatch) => {
  dispatch(countriesLoadingTrue());
  const { countries } = await coronaApi.getCountries();

  dispatch({
    type: GET_COUNTRIES,
    payload: countries,
  });

  dispatch(countriesLoadingFalse());
};

export const getCountryStats = (iso) => async (dispatch) => {
  dispatch(countriesLoadingTrue());
  const res = await coronaApi.getCountryStats(iso);

  normalizeObjectByValue(res, (payload) => {
    dispatch({
      type: GET_COUNTRY_BY_ISO,
      payload,
    });
  });

  dispatch(countriesLoadingFalse());
};

export const countriesLoadingTrue = () => (dispatch) => {
  dispatch({
    type: COUNTRIES_LOADING_TRUE,
  });
};

export const countriesLoadingFalse = () => (dispatch) => {
  dispatch({
    type: COUNTRIES_LOADING_FALSE,
  });
};
