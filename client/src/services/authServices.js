//  /client/src/services/authServices.js
import axios from 'axios';

export default {
  getUsers: async () => {
    let res = await axios.get(`http://localhost:9000/api/user`);
    return res.data || [];
  },
  login: async (data) => {
    let res = await axios.post(`http://localhost:9000/api/auth/login`, data);
    return res.data || [];
  },
  createUser: async (data) => {
    let res = await axios.post(`http://localhost:9000/api/user`, data);
    return res.data || [];
  },
  deleteUser: async (userName) => {
    let res = await axios.delete(`http://localhost:9000/api/user/${userName}`);
    return res.data || [];
  },
  logout: async () => {
    sessionStorage.clear();
  }

}
