import {
  GET_COUNTRIES,
  COUNTRIES_LOADING_TRUE,
  COUNTRIES_LOADING_FALSE,
} from '~/redux/actions/countriesActions/types';

const initialState = {
  isLoading: false,
  items: [],
};

const countriesReduces = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTRIES_LOADING_TRUE:
      return { ...state, isLoading: true };
    case COUNTRIES_LOADING_FALSE:
      return { ...state, isLoading: false };
    case GET_COUNTRIES:
      return { ...state, items: [...state.items, ...payload] };
    default:
      return state;
  }
};

export { countriesReduces };
