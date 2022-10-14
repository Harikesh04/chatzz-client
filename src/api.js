import axios from 'axios';

// const url = 'http://127.0.0.1:4000';
const url = 'https://chatting-chatzzz.herokuapp.com';

const instance = axios.create({
  baseURL: url,
});

export default instance;
