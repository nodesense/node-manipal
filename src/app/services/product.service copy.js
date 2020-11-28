
let products = [ {id: 1, name: 'iphone', price: 4000},
                 {id: 2, name: 'samsung', price: 3000},
                 {id: 3, name: 'oneplus', price: 6000},
               ]

class ProductService {
    getProducts() {
        return Promise.resolve(products);
    }

    getProduct(id) {
        // +id convert string to number if any
        const product = products.find(product => product.id === +id)
        if (product)
            return Promise.resolve(product)
            
        return Promise.reject("Product Not Found");
    }

    saveProduct(product) {
        products.push(product)
        return Promise.resolve(product)
    }

    updateProduct(id, productJson) {
        const product = products.find(product => product.id === +id)
        if (product) {
            product.price = productJson.price;
            product.name = productJson.name;
            return Promise.resolve(product)
        }

        return Promise.reject("Product not found")
    }

    deleteProduct(id) {
        const index = products.findIndex(product => product.id === +id)
        if (index >= 0) {
            products.splice(index, 1)
            return Promise.resolve({result: true})
        }

        return Promise.reject("Product Not Found")
    }
}

// singleton export.
// module keyword is from common.js /node.js
module.exports = new ProductService();