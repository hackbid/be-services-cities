const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.rajaongkir.com/starter',
});
api.interceptors.request.use(
    function (config) {
        //edit headers
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = 'application/json';
        config.headers['key'] = process.env.RAJAONGKIR_KEY;
        return config;
    },
    function (error) {
        r;
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

module.exports = api;
