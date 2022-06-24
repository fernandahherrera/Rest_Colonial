const express = require('express');
const app =  express();

const path = require('path');
const router = express.Router()

// STATIC ASSETS
app.use(express.static(path.join(__dirname, 'static')));

// TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// ROUTES
app.get('/', (request, response) => {
  response.render('login');
});

// ROUTER
app.use('/', router);
app.listen(process.env.PORT || 5000);

console.log('RUNNING ON PORT 5000');
