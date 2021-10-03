import axios from 'axios';
import { toast } from 'react-toastify';

// export const BASE_URL = 'https://w7i1o4lwch.execute-api.ap-east-1.amazonaws.com/dev';
export const BASE_URL = '/api/v1';

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
    return response.data;
  },
  (error) => {
    const msg = error?.response?.data?.message;
    if (Array.isArray(msg)) return toast.error(msg?.join(', '));
    if (msg) toast.error(msg);
  }
);

export default instance;
