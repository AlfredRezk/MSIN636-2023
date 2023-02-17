const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();

const poructsRoutes = require('./routes/Product');
const usersRoutes = require('./routes/User');

const port = 8080;



app.engine('hbs', engine({
    extname:'.hbs', 
    defaultLayout:'main', 
    partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.set('view engine', 'hbs');

// Routes middleware 
app.use('/product', poructsRoutes)
app.use('/user', usersRoutes)




app.listen(port);