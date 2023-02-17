const Product = require('../model/Product');

exports.getProducts = (req, res) => {
    const products = Product.fetchProducts();
    res.render("products/Home", { docTitle: "All Products", products });
}

exports.getProduct = (req, res) => {
    const id = req.params.prodId;
    const product = Product.findById(id)
    if (product) {
      res.render("products/Details", {
        docTitle: `Product ${product.id}`,
        product,
      });
    }
  }


  exports.postDelete = (req, res)=>{
    const id = req.params.prodId;
    Product.removeById(id);
    res.redirect('/product')
  }





