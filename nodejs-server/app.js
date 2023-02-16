const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express()

const port = 8080;

// Middleware parse form data
app.use(express.urlencoded({extended:false}))


app.get('/',(req, res)=>{
 res.sendFile(path.join(__dirname, 'index.html'))
})


app.post('/', (req, res)=>{
   fs.writeFileSync('data.txt', req.body.username);
   res.redirect('/')
})


app.listen(port, console.log(`Server running on port ${port}`));