const router = require('express').Router()



router.get('/', (req, res)=>{
    res.send('List all Users')
})





module.exports = router;