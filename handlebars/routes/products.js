const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('List all products');
})

router.post('/', (req, res)=>{
    console.log('Product added');
})





module.exports = router;