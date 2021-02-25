import { FETCH_STORAGE_PLANS, SELECT_STORAGE_PLAN } from './types';
import api from '../api';

export const fetchStoragePlans = () => (dispatch) => {
  api.getAllPlans().then((res) => {
    return dispatch({
      type: FETCH_STORAGE_PLANS,
      storagePlans: res.data,
    });
  });
};

export const selectStoragePlan = (storagePlan) => ({
  type: SELECT_STORAGE_PLAN,
  selectedStoragePlan: storagePlan,
});
