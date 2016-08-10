var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var request = require('request');

/* Redis */
var redis = require('redis'),
  client = redis.createClient();


/* Components */
var Footer = React.createFactory(require('../views/footer.js'));
var Jumbotron = React.createFactory(require('../views/jumbotron.js'));
var Tutorial = React.createFactory(require('../views/tutorial.js'));
var Navigation = React.createFactory(require('../views/navigation.js'));

var Context = React.createFactory(require('../views/context.js'));

/* Home page */
router.get('/', function(req, res, next) {
    res.render('home', {
        navigation: ReactDOMServer.renderToString(Navigation())
        , jumbotron: ReactDOMServer.renderToString(Jumbotron())
        , tutorial:  ReactDOMServer.renderToString(Tutorial())
        , footer: ReactDOMServer.renderToString(Footer())
    });
});

var options = { method: 'GET',
    url: 'http://localhost:3000/api/context' };

router.get('/context', function(req, res, next) {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
            //res.render(body);
            console.log(body);
    });
});

router.get('/learn', function(req, res, next){
    client.get('context', function(err, reply) {
        res.render('context', {
            context: ReactDOMServer.renderToString(Context({ data: JSON.parse(reply)}))
            , contextSlave: ReactDOMServer.renderToString(Context({ data: JSON.parse(reply)}))
            , layout: 'test.handlebars'
        });
    });
});

module.exports = router;