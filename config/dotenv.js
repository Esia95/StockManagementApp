'use strict';

const path = require('path');

module.exports = function (env) {
  return {
    clientAllowedKeys: ['AUTH0_CLIENTID', 'AUTH0_DOMAIN'],

    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env'),
    enabled: env !== 'production',
  };
};
