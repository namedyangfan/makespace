import { FETCH_STORAGE_PLANS, SELECT_STORAGE_PLAN, UPDATE_NAME } from '../actions/types';

const initialState = {
  storagePlans: [],
  selectedStoragePlan: {},
  test2:''
};

const storagePlanReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STORAGE_PLANS:
      return {
        ...state,
        storagePlans: action.storagePlans,
      };

    case SELECT_STORAGE_PLAN:
      return {
        ...state,
        selectedStoragePlan: action.selectedStoragePlan,
      };

    case UPDATE_NAME:
      return {
        ...state,
        test2: action.name,
      };

    default:
      return state;
  }
}

export default storagePlanReducer;