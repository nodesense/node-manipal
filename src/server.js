const config = require('./app/config');

const http = require('http');
const app = require('./app'); // automatically get index.js app

const mongo = require('./app/config/mongo');

mongo.connectMongo()
     .then ( () => console.log("Mongo DB connected"))
     .catch ( (error) => {
        console.log("Mondo DB not connected " , error);
        // pm2 to restart/linux daemon, restart autmatically
        // kunernetes pod restart
        process.exit(-1)
     })

const server = http.createServer(app)

server.listen(config.PORT, config.HOST, function callback(err) {
    if (err) {
        console.log("Error starting server");
        process.exit(-1);
    }

    console.log("Server running ", server.address())
})
