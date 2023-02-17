const router = require("express").Router();
const {getProduct, getProducts, postDelete} = require('../controller/prodCtrl')


// GET - All products
router.get("/", getProducts);
// Get a single product
router.get("/:prodId", getProduct);
// POST Delete product
router.post('/delete/:prodId', postDelete)

module.exports = router;
