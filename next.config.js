
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // http://dev.strapi.instanpe.com:1337    -- Local Url
    // baseurl: 'https://dsapi.instanpe.com',
    // baseurl: 'https://sapi.instanpe.com'
    // other environment variables if needed
  },
  async rewrites() {
    return [
      {
        source: '/careers',
        destination: '/pages/careers',
      },
      {
        source: '/contact',
        destination: '/pages/contact',
      },
      {
        source: '/terms',
        destination: '/pages/terms',
      },
      {
        source: '/privacy',
        destination: '/pages/privacy',
      },
      {
        source: '/legal',
        destination: '/pages/legal',
      },
    ];
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//    // http://dev.strapi.instanpe.com:1337    -- Local Url
//    // baseurl: 'https://dsapi.instanpe.com',
//    // baseurl:'https://sapi.instanpe.com'
//     // other environment variables if needed
//   },
// };

// module.exports = nextConfig;
