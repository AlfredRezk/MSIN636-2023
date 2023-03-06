const Product = require("../models/Product")

exports.getAddProduct = (req, res)=>{
    res.render('admin/add-product', {docTitle: 'Add Product', addProductActive: true})
}

exports.postAddProduct = async(req, res)=>{
    const product = new Product(req.body.imageUrl, req.body.title, req.body.desc, req.body.price);
    await product.save();

    res.redirect('/');
}

exports.getProducts = async(req, res)=>{
    const products = await Product.fetchProducts();
    res.render('admin/list-products', {docTitle:'Admin Products', products, adminProductsActive: true})

}

exports.postDeleteProduct = async(req, res)=>{

    await Product.deleteById(req.body.id)
    res.redirect('/admin/products');
}