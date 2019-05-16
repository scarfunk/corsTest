var express = require('express');
var cors = require('cors');
var app = express();
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);


var root = { hello: () => 'Hello world!' };

var cors = require('cors');
var corsOptions = {
    origin: 'http://10.210.1.77:8020',
    credentials: true
};

app.use(cors(corsOptions));

app.use('/graphql', graphqlHTTP((request, res) => {
    res.cookie('skoh', 'hi skoh', { maxAge: 900000, httpOnly: true });
    return {
        schema: schema,
        rootValue: root,
        context: { startTime: Date.now() },
        graphiql: true,
    };
}));

// app.get('/test', function (req, res, next) {
//     res.cookie('skoh', 'hi skoh', { maxAge: 900000, httpOnly: true });
//     res.json({ msg: 'GET call This is CORS-enabled for all origins!' })
// });

app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 9999')
});