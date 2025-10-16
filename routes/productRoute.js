const express = require('express')
const router = express.Router()
const {getProducts, searchProduct, singleProduct,updateProduct,deleteProduct} = require('../controller/productController')

router.get('/products',getProducts)
router.get('/product/:id',singleProduct)
router.get('/product/',searchProduct)
router.put('/product/:id',updateProduct)
router.delete('/product/:id',deleteProduct)

module.exports = router
