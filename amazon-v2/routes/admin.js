const router = require('express').Router();
const {getAddProduct, postAddProduct, getProducts, postDeleteProduct} = require('../controllers/admin');


router.get('/add-product', getAddProduct)
router.post('/add-product', postAddProduct)
router.get('/products', getProducts);
router.post('/delete-product', postDeleteProduct)



module.exports = router 