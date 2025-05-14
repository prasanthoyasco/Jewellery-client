import axios from 'axios';

export const trackSale = async (saleData) => {
  return axios.post('http://localhost:5000/api/analytics/sale', saleData);
};

export const trackAbandonedCart = async (cartData) => {
  return axios.post('http://localhost:5000/api/analytics/abandoned', cartData);
};

export const getAnalyticsSummary = async () => {
  return axios.get('/api/analytics/summary');
};
