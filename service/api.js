import axios from 'axios'

const API = axios.create({})

if (typeof window !== "undefined") {
  API.defaults.headers.common['Authorization'] = "user3:" + Math.round(Math.random() * 10000);
}

export function setAuthToken(context) {

  if (context) {
    // const token = context.req.cookies.myToken

    const token = context;

    API.defaults.headers.common['Authorization'] = `${token}`;
  }
}

export default API

