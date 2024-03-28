const express = require('express');
const { createProduct,getallproduct,deleteProduct,singleProduct } = require('../controllers/productController');
const router = express.Router();
// productController.createProduct
router.post('/createProducts',createProduct )
router.get('/allProduct', getallproduct)
router.delete( '/deleteProduct/:id', deleteProduct);
router.get( '/singleProduct/:id', singleProduct);


module.exports = router;