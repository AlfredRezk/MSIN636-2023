const express = require('express');
const colors = require('colors');
const {engine} = require('express-handlebars')
const path = require('path');

// Routes 
const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');

const PORT = 8080;
const app = express();

// Express middlewares 
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// configure handlebars
app.engine('hbs', engine({
    extname:'.hbs', 
    partialsDir: 'views/partials'
}))
app.set('view engine', 'hbs');


app.use(productRoutes);
app.use('/admin', adminRoutes);




app.listen(PORT, console.log(`Server running on Port ${PORT}`.green.underline))