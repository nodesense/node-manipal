const winston = require('winston');
const config = require('./index');
const path = require('path');

const logger = winston.createLogger({
  level: 'info',
  // format: winston.format.json(),
  // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: path.join(config.LOG_DIR, 'error.log'), level: 'error' }),
    new winston.transports.File({ filename: path.join(config.LOG_DIR, 'combined.log')}),
    new winston.transports.Console(),

  ],
});
 
module.exports = logger