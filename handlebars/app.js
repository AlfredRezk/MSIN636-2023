const express = require('express');
const colors = require('colors');
const path = require('path');
const app = express();
const {engine} = require('express-handlebars')


// Import routes 
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const port = 8080;

app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

// Configure the view engine
app.engine('hbs', engine({
    extname:'.hbs',
    partialsDir:path.join(__dirname, 'views', 'partials')
}))

// Set express view engine 
app.set('view engine', 'hbs');

// set the views folder 
app.set('views', './views')

app.get('/', (req, res)=>{

    // const users = [
    //     {img:'women/0.jpg', 
    //     name: 'Jane smith', 
    //     title: 'developer'
    // }, 
    
    //     {img:'men/0.jpg', 
    //     name: 'Mike smith', 
    //     title: 'front end developer'
    // }, 

    // {img:'men/1.jpg', 
    //     name: 'John smith', 
    //     title: 'backend developer'
    // }, 

    // ]

    const users = []
    res.render('home', {docTitle: 'Home Page', loggedIn: true, users});
})

app.use('/products', productRoutes);
app.use('/users', userRoutes);


app.use((req, res)=>{
    res.status(404).send('404 File not found !')
})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`.yellow.bgRed.underline)
})