var express = require('express');
var router = express.Router();
/* REACT */
var React = require('react');
var ReactDOMServer = require('react-dom/server');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Hola'
        , subtitle: 'BOUNCE'
    });
});


/* GET about */
router.get('/about', function(req,res, next) {
    var element = React.createElement('div', null, 'Hello World!');
    res.render('about', {
        about: ReactDOMServer.renderToString(element)
    });
});


module.exports = router;