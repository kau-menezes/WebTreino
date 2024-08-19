const express = require('express');
const routes = require('./routes');

const app = express();

// the API is down here, hosted by the server!!

app.use(express.urlencoded({ extended: true }));

// static files - not used for the back-end of the project
app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

// here's how the routes are handled 
app.use(routes);

app.listen(3000, () => console.log('Server is running at: http://localhost:3000/'));