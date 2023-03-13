const router = require('express').Router();
const {getAddProduct, postAddProduct, getProducts, postDeleteProduct, getEditProduct, 
    postEditProduct} = require('../controllers/admin');


router.get('/add-product', getAddProduct)
router.post('/add-product', postAddProduct)
router.get('/products', getProducts);
router.post('/delete-product', postDeleteProduct)
router.post('/edit-product', postEditProduct)
router.get('/edit/:id', getEditProduct)



module.exports = router 