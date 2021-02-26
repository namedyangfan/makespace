import {
  FETCH_CITIES,
  UPDATE_NAME,
  UPDATE_STREET,
  UPDATE_SELECT_CITY_VALUE,
  UPDATE_ZIP,
  UPDATE_STATE
} from '../actions/types';

const initialState = {
  cities  : [],
  userInfo: {
    name  : '',
    street: '',
    city  : '',
    zip   : '',
    state : ''
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

    case UPDATE_SELECT_CITY_VALUE:
      return {
        ...state,
        userInfo: { ...state.userInfo, city: action.city },
      };

    case UPDATE_ZIP:
      return {
        ...state,
        userInfo: { ...state.userInfo, zip: action.zip },
      };
    case UPDATE_STATE:
      return {
        ...state,
        userInfo: { ...state.userInfo, state: action.state },
      };

    default:
      return state;
  }
};

export default checkoutReducer;
