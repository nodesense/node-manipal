const mongoose = require('mongoose')
const config = require('./index');

const connectMongo = () => {
    return mongoose.connect(config.MONGO_URL, {useNewUrlParser: true})
}

module.exports =  { connectMongo }
