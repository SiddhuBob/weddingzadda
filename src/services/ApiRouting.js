// apiService.js
import axios from 'axios';

const BASE_URL = 'https://skdm.in/server/onefiveapi';
const apiService = axios.create({
  baseURL: BASE_URL,
});

// Generic function to handle different HTTP methods with headers
const request = async (method, url, data = null, headers = {}) => {
  try {
    const response = await apiService({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Specific API functions using the generic request function
export const get = (url, headers = {}) => request('get', url, null, headers);

export const post = (url, data, headers = {}) => request('post', url, data, headers);

export const put = (url, data, headers = {}) => request('put', url, data, headers);

export const del = (url, headers = {}) => request('delete', url, null, headers);

// Add more specific functions for other HTTP methods as needed