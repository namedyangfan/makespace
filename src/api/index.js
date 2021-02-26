import axios from 'axios';

const getAllPlans = () =>
  axios.get(`${process.env.REACT_APP_API_URL}/storagePlan`);

const getAllCities = () => axios.get(`${process.env.REACT_APP_API_URL}/city`);

export default { getAllPlans, getAllCities };
