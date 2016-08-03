var express = require('express');
var router = express.Router();
/* REACT */
var React = require('react');
var ReactDOMServer = require('react-dom/server');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {
        title: 'Soda Stereo'
        , subtitle: 'Gustavo Cerati'
    });
});

router.get('/about', function(req, res, next) {
    res.render('june');
});

/* GET about */
router.get('/hello', function(req,res, next) {
    var element = React.createElement('div', null, 'Hello World!');
    res.render('hello', {
        about: ReactDOMServer.renderToString(element)
    });
});


module.exports = router;