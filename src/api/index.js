import axios from 'axios';

const getAllPlans = () => axios.get(`${process.env.REACT_APP_API_URL}/storagePlan`);

export default { getAllPlans };
