import {
  FETCH_CITIES,
  UPDATE_NAME,
  UPDATE_STREET,
  UPDATE_SELECTED_CITY,
} from '../actions/types';

const initialState = {
  cities  : [],
  userInfo: {
    name  : '',
    street: '',
    selectedCity: {
      city       : '',
      zipCode    : '',
      state      : '',
      priceFactor: 1,
      cityName   : ''
    }
  },
};

const checkoutReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        cities: action.cities,
      };

    case UPDATE_NAME:
      return {
        ...state,
        userInfo: { ...state.userInfo, name: action.name },
      };

    case UPDATE_STREET:
      return {
        ...state,
        userInfo: { ...state.userInfo, street: action.street },
      };

    case UPDATE_SELECTED_CITY:
      return {
        ...state,
        userInfo: { ...state.userInfo, selectedCity: action.city },
      };

    default:
      return state;
  }
};

export default checkoutReducer;
