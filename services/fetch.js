import axios from 'axios';

const _instance = axios.create({
  baseURL: 'https://laarc.io',
});

class FetchService {
  static async get(url, options) {
    return _instance.get(url, options);
  }

  static async post(url, data, options) {
    return _instance.post(url, data, options);
  }

  static setInstanceCookie(cookieStr) {
    _instance.defaults.headers.common.cookie = `; ${cookieStr}`;
  }
}

export default FetchService;
