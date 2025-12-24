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
  (config) => {
    const method = (config.method || 'get').toUpperCase();
    const fullUrl = `${config.baseURL || ''}${config.url || ''}`;

    console.log(`[REQUEST] ${method} ${fullUrl}`);

    if (config.params && Object.keys(config.params).length > 0) {
      console.log('[REQUEST PARAMS]', config.params);
    }

    if (config.data) {
      console.log('[REQUEST BODY]', config.data);
    }

    return config;
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
