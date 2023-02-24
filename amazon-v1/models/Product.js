const fs = require('fs');
const path = require('path');
const dbFile = path.join(__dirname, '../data/db.json');
const { v4: uuid } = require('uuid');


const getProducts =()=>{
   return new Promise((resolve, reject)=>{
    fs.readFile(dbFile, (err, data)=>{

        if(err) resolve([]);
         resolve(JSON.parse(data))
    })

   })
}


module.exports = class Product {

    constructor(imageUrl, title, desc, price){
        this.id = uuid(); 
        this.imageUrl = imageUrl; 
        this.title = title; 
        this.desc = desc;
        this.price = price
    }

     async save(){
        const products = await getProducts()
        products.push(this);
        fs.writeFile(dbFile, JSON.stringify(products), (err)=>{
            console.log(err)
        })
    }

    static fetchProducts(){
        return getProducts()
    }


    static  findById(id){
        return new Promise(async(resolve, reject)=>{
            const  products = await getProducts();
            const product = products.find(p=> p.id ===id)
            resolve(product)
        })

    }

}


