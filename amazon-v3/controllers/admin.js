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



exports.getEditProduct = async(req, res)=>{
 
    const id = req.params.id;
    const editMode = req.query.edit_mode;

    if(!editMode) res.redirect('/');

   const product =   await Product.findById(id);
  if(!product) res.redirect('/');  
  res.render('admin/add-product', {editMode, product, docTitle:'Edit Product'})
}

exports.postEditProduct = async(req, res)=>{
    await Product.update(req.body);
    res.redirect('/admin/products')

}