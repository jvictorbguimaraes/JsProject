const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//mongodb+srv://jvictor:<password>@cluster0.lcbit.mongodb.net/<dbname>?retryWrites=true&w=majority

//Import Routes

const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

mongoose.connect('mongodb+srv://jvictor:m456123m@cluster0.lcbit.mongodb.net/NodeJS?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected');
    })



app.listen(3000);