var express = require("express");
var request = require("request");

var app = express();
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render('results');
});

app.get('/results', function(req, res) {
    var city = req.query.city; 
    var url = 'https://goweather.herokuapp.com/weather/';

    url = url + city;

    request(url, function(error, response, body) {
        if(error) {
            console.log('Something went wrong!');
        } else {
            var data = JSON.parse(body);
            res.render("results", {data, city});
        }
    });
});

var port = 3000;
ip = '127.0.0.1';
app.listen(port, ip, function() {
    console.log('Server is running at ', ip, ':' , port);
});