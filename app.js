const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Convert to JSON
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES

app.get('/', (req, res) => {
    res.send('We are on home!');
});



//Connet to DB

mongoose.connect(
    process.env.DB_CONNECTION,
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }) 
.then(() => console.log('Connected to DB!'))
.catch(err => {
    console.log('Error!');
})


//Listening to port...
app.listen(3000);