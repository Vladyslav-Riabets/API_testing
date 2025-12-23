const axios = require('axios');

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

httpClient.interceptors.request.use(
  (request) => {
    const method = (request.method || 'get').toUpperCase();

    console.log(`[REQUEST] ${method} ${request.baseURL || ''}${request.url}`);

    if (request.params) {
      console.log('[REQUEST PARAMS]', request.params);
    }

    if (request.data) {
      console.log('[REQUEST BODY]', request.data);
    }

    return request;
  },
  (error) => {
    console.error('[REQUEST ERROR]', error.message);
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    console.log(`[RESPONSE] ${response.status} ${response.config.url}`);

    if (Array.isArray(response.data)) {
      console.log(`[RESPONSE DATA] array(${response.data.length})`);
    } else {
      console.log('[RESPONSE DATA]', response.data);
    }

    return response;
  },
  (error) => {
    if (error.response) {
      const { status, statusText, data } = error.response;
      console.error(`[RESPONSE ERROR] ${status} ${statusText}`);
      console.error('[RESPONSE ERROR DATA]', data);
    } else if (error.request) {
      console.error('[NO RESPONSE]', error.message || 'Network error');
    } else {
      console.error('[SETUP ERROR]', error.message || 'Unknown error');
    }

    return Promise.reject(error);
  }
);

module.exports = httpClient;
