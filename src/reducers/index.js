import { combineReducers } from 'redux';
import storagePlanReducer from './storagePlanReducer';
import checkoutReducer from './checkoutReducer';

export default combineReducers({
  storagePlan: storagePlanReducer,
  checkout: checkoutReducer
});