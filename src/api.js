import axios from 'axios';

  //  const url = 'http://localhost:4000';
   const url = 'https://chatzz-chat-app.herokuapp.com/';

const instance = axios.create({
  baseURL: url,
});

export default instance;
