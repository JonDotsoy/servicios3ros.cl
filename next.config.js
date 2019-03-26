require('dotenv').config({
  path: `${__dirname}/.env`,
});

const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    GMTID: process.env.GMTID || 'GTM-5CX6KRM',
  },
});
