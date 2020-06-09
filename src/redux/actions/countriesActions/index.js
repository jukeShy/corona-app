import { CoronaApi } from '~/api/corona.api';
import {
  GET_COUNTRIES,
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
