// const axios = require('axios');

// const api = axios.create({
//     baseURL: 'https://api.rajaongkir.com/starter',
// });
// api.interceptors.request.use(
//     function (config) {
//         //edit headers
//         config.headers['Content-Type'] = 'application/json';
//         config.headers['Accept'] = 'application/json';
//         config.headers['key'] = 'd0d80a4b96a0f1fcefdd1c83266e3a66';
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// // Add a response interceptor
// api.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );


const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.rajaongkir.com/starter',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'key': 'd0d80a4b96a0f1fcefdd1c83266e3a66'
    }
});

module.exports = api;
// module.exports = api;
