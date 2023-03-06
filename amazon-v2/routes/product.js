const router = require('express').Router()
const {getProducts} = require('../controllers/product');

router.get('/', getProducts);





module.exports = router;