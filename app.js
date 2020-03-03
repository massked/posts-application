const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Convert to JSON
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

//Import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);

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