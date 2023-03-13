const Product = require('../models/Product')

exports.getProducts = async(req, res)=>{

    const products = await Product.fetchProducts()
    res.render('user/home', { docTitle: 'Home Page', products, productsActive: true});
   
}


exports.getProduct = async(req, res)=>{
    const id = req.params.id; 
    const product = await Product.findById(id);
    res.render('user/product-details', {product, docTitle: 'Product details'})

}