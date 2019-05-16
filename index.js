var express = require('express');
var cors = require('cors');
var app = express();

var cors = require('cors');
var corsOptions = {
    origin: '*',
    credentials: true
};

app.use(cors(corsOptions));

app.get('/test', function (req, res, next) {
    res.cookie('skoh', 'hi skoh', { maxAge: 900000, httpOnly: true });
    res.json({ msg: 'GET call This is CORS-enabled for all origins!' })
});

app.post('/test', function (req, res, next) {
    res.cookie('skoh', 'hi skoh', { maxAge: 900000, httpOnly: true });
    res.json({ msg: 'POST call res!' })
});


app.listen(9999, function () {
    console.log('CORS-enabled web server listening on port 9999')
});