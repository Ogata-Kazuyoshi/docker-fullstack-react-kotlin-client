import axios from 'axios';

const proxytest = {
  getdata: () => axios.get('/api/v1/images/all/'),
};

export default proxytest;
