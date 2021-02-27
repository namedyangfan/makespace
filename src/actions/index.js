import {
  FETCH_STORAGE_PLANS,
  SELECT_STORAGE_PLAN,
  FETCH_CITIES,
  UPDATE_NAME,
  UPDATE_STREET,
  UPDATE_SELECTED_CITY
} from './types';
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

export const fetchCities = () => (dispatch) => {
  api.getAllCities().then((res) => {
    return dispatch({
      type: FETCH_CITIES,
      cities: res.data,
    });
  });
};

export const updateName = (name) => ({
  type: UPDATE_NAME,
  name,
});

export const updateStreet = (street) => ({
  type: UPDATE_STREET,
  street,
});

export const updateSelectedCity = (city) => ({
  type: UPDATE_SELECTED_CITY,
  city,
});
