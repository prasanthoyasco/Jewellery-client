import axios from 'axios';

export const trackSale = async (saleData) => {
  return axios.post('/api/analytics/sale', saleData);
};

export const trackAbandonedCart = async (cartData) => {
  return axios.post('/api/analytics/abandoned', cartData);
};

export const getAnalyticsSummary = async () => {
  return axios.get('/api/analytics/summary');
};
