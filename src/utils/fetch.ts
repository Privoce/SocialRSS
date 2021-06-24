import axios from 'axios';

// export const BASE_URL = 'https://w7i1o4lwch.execute-api.ap-east-1.amazonaws.com/dev';
export const BASE_URL = '/api/dev';

// TODO: 异常处理
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// 请求拦截
instance.interceptors.request.use((config) => {
  // config.headers.token = 'token';
  return config;
});

// 返回拦截
instance.interceptors.response.use(
  (response) => {
    // TODO: 错误处理
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.statusText);
    }
  },
  () => {
    console.error('error');
  }
);

export default instance;
