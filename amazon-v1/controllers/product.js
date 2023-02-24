const Product = require('../models/Product')

exports.getProducts = async(req, res)=>{

    const products = await Product.fetchProducts()
    res.render('user/home', { docTitle: 'Home Page', products});
   
}