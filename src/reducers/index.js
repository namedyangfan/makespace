import { combineReducers } from 'redux';
import storagePlanReducer from './storagePlanReducer';

export default combineReducers({
  storagePlan: storagePlanReducer
});