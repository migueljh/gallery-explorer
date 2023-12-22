import axios from 'axios';

import config from '@config';

const { API_URL, CLIENT_ID } = config.content;

export const imgurApiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${CLIENT_ID}`,
  },
});
