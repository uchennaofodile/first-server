const express = require('express');

const app = express();

//setting view engine
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render('about.ejs');
});

app.listen(3000, function(){
    console.log("Server is running on port 3000...")});