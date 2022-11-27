import Axios, { AxiosRequestConfig } from 'axios';

const csrfRequestInterceptor = (config: AxiosRequestConfig) => {
  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute('content');

  if (config.headers && csrfToken) {
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  return config;
};

export const axios = Axios.create();

axios.interceptors.request.use(csrfRequestInterceptor);
axios.interceptors.response.use((response) => response.data as unknown);
