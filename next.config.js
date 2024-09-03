module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com'],
  },
  env: {
    NEXT_PUBLIC_RAPIDAPI_HOST: process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
    NEXT_PUBLIC_RAPIDAPI_KEY: process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  },
};
