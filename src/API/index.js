import axios from 'axios';

axios.defaults.baseURL = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';

export default axios;
