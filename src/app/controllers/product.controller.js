const productService = require('../services/product.service');

// handle the request/response
const productController = {
    getProduct: async (req, res) => {
        try {
            // await is es2016
          const product = await productService.getProduct(req.params.productId)
          // then portion
          res.json(product)
        }
        catch (err) { // catch part of promise, called Promise.reject
            res.status(404)
               .json({"error": err}) 
        }
    },

    getProducts: (req, res) => {
        productService.getProducts()
        .then (products => {
            res.json(products)
        })
    },

    // create new product
    saveProduct: async (req, res) => {
        // post method payload shall be avaialbel as req.body
        try {
            const productData = req.body
            const product = await productService.saveProduct(productData)
            res.json(product)
        }catch (err) {
            res.status(500)
                .json({error: err}) 
        }
    },

    updateProduct: async (req, res) => {
        try {
            const id = +req.params.productId
            const productData = req.body
            const product = await productService.updateProduct(id, productData)
            res.json(product)
        }
        catch (err) {
            res.status(404)
                .json({error: err})
        }
    },

    deleteProduct: async (req, res) => {
        try {
            await productService.deleteProduct(req.params.productId)
            res.json({result: true})
        }
        catch(error) {
            res.status(404)
                .json({error})
        }
    }

}

module.exports = productController;
