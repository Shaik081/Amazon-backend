const express = require('express')
const router = express.Router()
const {getProducts,SingleProduct,updateProduct,deleteProduct} = require('../controller/productController')

router.get('/product',getProducts)
router.get('/product/:id',SingleProduct)
router.put('/product/:id',updateProduct)
router.delete('/product/:id',deleteProduct)

module.exports = router
