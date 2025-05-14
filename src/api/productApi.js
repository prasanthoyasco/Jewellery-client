import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

export const getProducts = () => API.get('/products');
export const getProductbyid = (id) => API.get(`/products/${id}`);
export const getCategories = () => API.get('/categories')
export const postUserDetails = (data) => API.post('/auth/create-user', data);
export const requestOtp = (phone) => API.post('/auth/send-otp', { phone });
export const verifyOtp = (data) => API.post('/auth/verify-otp', data); 