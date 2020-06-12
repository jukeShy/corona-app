import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ISO,
  COUNTRIES_LOADING_TRUE,
  COUNTRIES_LOADING_FALSE,
} from '~/redux/actions/countriesActions/types';

const initialState = {
  isLoading: false,
  items: [],
  country: [],
};

const countriesReduces = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTRIES_LOADING_TRUE:
      return { ...state, isLoading: true };
    case COUNTRIES_LOADING_FALSE:
      return { ...state, isLoading: false };
    case GET_COUNTRIES:
      return { ...state, items: [...payload] };
    case GET_COUNTRY_BY_ISO:
      return { ...state, country: [...payload] };
    default:
      return state;
  }
};

export { countriesReduces };
