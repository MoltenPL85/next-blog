const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: process.env.DB_USER,
        mongodb_password: process.env.DB_PASS,
        mongodb_database: process.env.DB_NAME_DEV,
      },
    };
  }
  return {
    env: {
      mongodb_username: process.env.DB_USER,
      mongodb_password: process.env.DB_PASS,
      mongodb_database: process.env.DB_NAME,
    },
  };
};
