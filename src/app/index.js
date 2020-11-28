// node.js shall not support import directly
// require - common js
const express = require("express");

const productRouter = require('./routers/product.router');
const logger = require('./config/logger');

const uploader = require('./config/uploader');

var morgan = require('morgan')

const app = express()

app.use(morgan('combined'))


app.use((req, res, next) => {
    console.log("Middleware 1")
    // res.status(403).send("not authorized")
    next() ; // it forward/next middleware or handler
})

app.use((req, res, next) => {
    console.log("Middleware 2")
    next() ; // it calls next middleware or handler
})

// JSON content on POST/PUT/PATCH methods, posted with Content-Type application/json
// we can use middleware to parse this content into json
// check if content-type is json, it automatically parse the content into json
// place in req.body
app.use(express.json()) ; // body parser
app.use(express.urlencoded()); 
// use is a middleware
app.use(productRouter)

app.get("/throw", (req, res) => {
    throw new Error("Something went wrong")
})

// In postman, select type file for key and name the key to avatar and attach the file
// use upload.single/array, must be there for every uplaod file
app.post("/files",  uploader.single('avatar'), (req, res) => {
    console.log('files upload ', req.files)
    console.log('file upload ', req.file)
    console.log("req", req.body)
    res.json({result: true})
})

// express exception handler
// slighyl different than middleware,
// middleware takes 3 arg, where exception handler 4 args
// this should be last middleware
app.use((err, req, res, next) => {
    console.log("Exception ", err)
    logger.error(err)
    res.status(500)
        .json({"error": err.message})
})


// default export in common js
module.exports = app; 