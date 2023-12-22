const config = {
  content: {
    API_URL: import.meta.env.VITE_API_URL || 'https://api.imgur.com/3',
    CLIENT_ID: import.meta.env.VITE_CLIENT_ID || '13bfae9d2e9671f',
  },
};

export default config;
