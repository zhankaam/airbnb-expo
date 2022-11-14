import axios from 'axios';

export const baseURL = 'https://63307b61591935f3c890ab71.mockapi.io/';

export const http = axios.create({
  baseURL,
});
