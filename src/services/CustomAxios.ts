import axios from "axios";

const CustomAxios = axios.create({
  transformResponse: [].concat(
    // @ts-ignore
    axios.defaults.transformResponse,
    (data: any) => data
  ),
});


CustomAxios.interceptors.request.use(async (config) => {
  const token = 'AIzaSyAaa4h8M8ddzERozjBsPIDxqM0DYNMxr7w'
  if (config.method?.toUpperCase() === 'GET')
    config = {
      ...config,
      url: config.url + `&key=${token}`
    }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default CustomAxios;
