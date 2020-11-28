const mongoose = require('mongoose')

const Product = mongoose.model("Product")

const products = []

class ProductService {
    async getProducts() {
       try {
            const queryOptions = {}
            const products = await Product.find(queryOptions)
            return products;
       }catch(error) {
           throw error;
       }
    }

    async getProduct(id) {
        try {
            const product = await Product.findById(id)
            return product; 
        }
        catch(error) {
            throw error;
        }
    }

    async saveProduct(product) {
        try {
            const p = new Product(product)
            // savedProduct shall contains _id
            const savedProduct = await p.save()
            return savedProduct;
        }catch(error) {
            throw error;
        }
    }

    async updateProduct(id, productJson) {
         try {
            const p = await Product.findById(id)
            if (p) {
                p.name = productJson.name;
                p.price = productJson.price;
                const savedProduct =  await p.save()
                return savedProduct;
            } else {
                return undefined; // not found
            }
         }catch(error) {
            throw error;
        }
    }

    async deleteProduct(id) {
         await Product.deleteOne({_id: id})
         return {result: true}
    }
}

// singleton export.
// module keyword is from common.js /node.js
module.exports = new ProductService();