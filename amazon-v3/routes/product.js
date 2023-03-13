const router = require('express').Router()
const {getProducts, getProduct} = require('../controllers/product');

router.get('/', getProducts);
router.get('/products/:id', getProduct)





module.exports = router;