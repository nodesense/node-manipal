// node.js shall not support import directly
// require - common js
const express = require("express");

const app = express()

// GET /
app.get("/", function(req, res) {
    res.send("Hello3")
})

// GET /hello?name=node&framework=express
app.get("/hello", (req, res) => {
    console.log(req)
    console.log('params ', req.params)
    console.log('query ', req.query)
    res.json({result: true})
})

// GET /params/p3223232/b34214343
app.get("/params/:productId/:brandId", (req, res) => {
    console.log('params ', req.params)
    res.json({p : req.params.productId,
              b: req.params.brandId})
})

// default export in common js
module.exports = app; 