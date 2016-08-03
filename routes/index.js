var express = require('express');
var router = express.Router();
/* REACT */
var React = require('react');
var ReactDOMServer = require('react-dom/server');

/* GET home page. */
router.get('/', function(req, res, next) {
    var imageILO = React.createElement('img', {src: "images/ilo.png", className: "img-responsive"}),
        imageACTEMP = React.createElement('img', {src: "images/actemp.png", className: "img-responsive pull-right css-index-footer-right"}),
        divLeft6 = React.createElement('div', {className: "col-lg-6 text-left"}, imageILO),
        divRight6 = React.createElement('div', {className: "col-lg-6 text-right"}, imageACTEMP),
        footer = React.createElement('div', {className: "container css-index-footer"}, divLeft6, divRight6);

    res.render('home', {
        footer: ReactDOMServer.renderToString(footer)
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