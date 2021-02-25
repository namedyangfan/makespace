import { FETCH_STORAGE_PLANS, SELECT_STORAGE_PLAN } from '../actions/types';

const initialState = {
  storagePlans: [],
  selectedStoragePlan: {},
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

    default:
      return state;
  }
}

export default storagePlanReducer;