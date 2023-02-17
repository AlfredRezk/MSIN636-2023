let products = [
    {
      id: 1,
      title: "TV",
      price: 450,
      image:
        "https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg",
    },
    {
      id: 2,
      title: "Radio",
      price: 56,
      image: "https://m.media-amazon.com/images/I/51LhN1S0+tL.jpg",
    },
    {
      id: 3,
      title: "Keyboard",
      price: 20,
      image:
        "https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/keyboards/kb500/kb500-kbm-02-bk.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=852&qlt=100,1&resMode=sharp2&size=852,402&chrss=full",
    },
  ];


class Product {
    constructor(title, image, price){
        this.id = Date.now();
        this.title  = title;
        this.image = image;
        this.price = price;
    }

    static fetchProducts(){
        return products;
    }


    static findById(id){
        return  products.find((prod) => prod.id == id);
    }

    static removeById(id){
    products = products.filter(prod=> prod.id != id)
    return products
    }

    remove(){
        products = products.filter(prod=> prod.id != this.id)
        return products
    }

    save(){
        products.push(this)
    }
  }



  module.exports = Product