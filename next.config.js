
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    GMTID: 'AAAA',
  },
});
