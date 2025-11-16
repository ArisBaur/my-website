var express = require('express'); // handles requests + responses
var os = require('os');

// create app
var app = express();
const router = express.Router(); //??
app.use(express.static(__dirname + '/static')); //to use css?

console.log("Server starting...");



//HTTP GET
app.get('/', function (req, res) {
    res.sendFile("pages/index.html", { root: __dirname });
});

app.get('/home', function (req, res) {
    res.sendFile("pages/home.html", { root: __dirname });
});

app.get('/blogs', function (req, res) {
    res.sendFile("pages/blogs.html", { root: __dirname });
});

app.get('/tutoring', function (req, res) {
    res.sendFile("pages/tutoring.html", { root: __dirname });
});

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Info app listening at http://%s:%s", host, port)
});
