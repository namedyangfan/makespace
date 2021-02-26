import {
  FETCH_CITIES,
  UPDATE_NAME,
  UPDATE_STREET,
  UPDATE_CITY,
  UPDATE_ZIP,
} from '../actions/types';

const initialState = {
  cities: [],
  userInfo: {
    name: null,
    street: null,
    city: null,
    zip: null,
  },
  test: ''
};

const checkoutReducer = function (state = initialState, action) {
  console.log('action: ', action);
  switch (action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        cities: action.cities,
      };

    // case UPDATE_NAME:
    //   return {
    //     ...state,
    //     test: 'Fan',
    //   };

    case UPDATE_STREET:
      return {
        ...state,
        userInfo: { ...state.userInfo, street: action.street },
      };
    // case UPDATE_CITY:
    //   return {
    //     ...state,
    //     userInfo: { ...state.userInfo, city: action.city },
    //   };
    // case UPDATE_ZIP:
    //   return {
    //     ...state,
    //     userInfo: { ...state.userInfo, zip: action.zip },
    //   };

    default:
      return state;
  }
};

export default checkoutReducer;
