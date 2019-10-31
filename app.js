const express = require('express');

const app = express();

//setting view engine
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render('about.ejs'); 
});

//middleware
app.use(express.static('./public'));

//get '/' route
app.get('/contact', function (req, res) {
   res.render('contact.ejs');
});

app.get('/projects', function (req, res) {
   res.render('projects.ejs');
});

app.listen(3000, function(){
    console.log("Server is running on port 3000...")});