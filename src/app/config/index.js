// load .env and assign to process.env
require('dotenv').config()

require('../models/Product'); // to initialize the model at least one time

const config = {
    HOST: process.env.HOST || '0.0.0.0',
    PORT: +process.env.PORT || 8080,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/test',
    LOG_DIR: process.env.LOG_DIR,
    UPLOAD_DIR: process.env.UPLOAD_DIR
}

module.exports = config