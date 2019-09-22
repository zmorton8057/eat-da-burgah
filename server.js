const express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.engine("handlbars", exphbs({defaultLayout: "main" }));
app.set('view engine', "handlebars");

app.listen(PORT, function(){
    console.log("Server Listening on Port: " + PORT);
});