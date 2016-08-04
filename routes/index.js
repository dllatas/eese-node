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

    var tutorial = React.createElement('iframe', {src: "https://www.youtube.com/embed?v=AsDnw3UxRQY&amp;list=PLCl71clloeTKlzogT9LIhEi4AgdL8ZN59", className: "embed-responsive-item"})
        , divVideo = React.createElement('div', {className: "embed-responsive embed-responsive-16by9"}, tutorial)
        , divHomeRight = React.createElement('div', {id: 'homeRight', className: "col-lg-6 css-index-box"}, divVideo)
        , text1 = React.createElement('p', {className: 'virtualTourTitle1'}, "What's EESE data all about?")
        , text2 = React.createElement('p', {className: 'virtualTourTitle1'}, "Why are we doing this?")
        , text3 = React.createElement('p', {className: 'virtualTourTitle2'}, "We 're glad you asked.")
        , text4 = React.createElement('p', {className: 'virtualTourTitle2'}, "Watch the 7 videos to master the application!")
        , text5 = React.createElement('p', {className: 'virtualTourTitle2'}, "Explore more about EESE data at Learn More!")
        , spanMenu = React.createElement('span', {className: 'glyphicon glyphicon-menu-right', ariaHidden: 'true'})
        , learnMoreBtn = React.createElement('a', {className: 'btn btn-info', href: "/learn", role: "button"}, "Learn More", spanMenu)
        , pEl = React.createElement('p', null, learnMoreBtn)
        , divRight = React.createElement('div', {className: 'text-right'}, pEl)
        , spanMenuDown = React.createElement('span', {className: 'glyphicon glyphicon-menu-down', ariaHidden: 'true'})
        , virtualTourTitle = React.createElement('h2', {id: 'virtualTourTitle'}, 'VIRTUAL TOUR', spanMenuDown)
        , spaceTitle = React.createElement('br', null)
        , divHomeLeft = React.createElement('div', {id: 'homeLeft', className: 'col-lg-6 text-left css-index-box'}, virtualTourTitle, spaceTitle, text1, text2, text3, text4, text5, divRight)
        , divRow = React.createElement('div', {className: 'row'}, divHomeLeft, divHomeRight)
        , divContainer = React.createElement('div', {className: 'container'}, divRow);

    var imageEESE = React.createElement('img', {src: "images/eese.png", className: "img-responsive center-block css-header-page-img"})
        , divCenter12 = React.createElement('div', {className: "col-lg-12 text-center"}, imageEESE)
        , divContainer2 = React.createElement('div', {className: 'container'}, divCenter12)
        , divJumbotron = React.createElement('div', {className: 'jumbotron'}, divContainer2);

    var username = React.createElement('input', {id: 'username', type: 'text', placeholder: "Username", className: "form-control"})
        , usernameForm = React.createElement('div', {className: "form-group"}, username)
        , password = React.createElement('input', {id: 'password', type: 'password', placeholder: "Password", className: "form-control"})
        , passwordForm = React.createElement('div', {className: "form-group"}, password)
        , signInBtn = React.createElement('button', {id: 'signIn', type: 'button', className: 'btn btn-success'}, "Sign in")
        , recoverSpan = React.createElement('span', {className: 'glyphicon glyphicon-lock', ariaHidden: 'true'})
        , recoverBtn = React.createElement('button', {id: 'recoverPass', type: 'button', className: 'btn btn-info', ariaLabel: 'Recover Password'}, recoverSpan)
        , navbarForm = React.createElement('form', {className: 'navbar-form navbar-right', role: 'form'}, usernameForm, passwordForm, signInBtn, recoverBtn)
        , navbar = React.createElement('div', {id: 'navbar', className: 'navbar-collapse collapse'}, navbarForm)
        , spanSR= React.createElement('span', {className: 'sr-only'}, "Toggle navigation")
        , spanIcon = React.createElement('span', {className: 'icon-bar'})
        , btnNavToggle = React.createElement('button', {type: "button", className: "navbar-toggle collapsed", dataToggle: "collapse", dataTarget: "#navbar", ariaExpanded: "false", ariaControls: "navbar"}, spanSR, spanIcon, spanIcon, spanIcon)
        , navbarHeader = React.createElement('div', {className: 'navbar-header'}, btnNavToggle)
        , navContainer = React.createElement('div', {className: 'container'}, navbarHeader, navbar)
        , navbarMain = React.createElement('nav', {className: 'navbar navbar-inverse navbar-fixed-top', role: 'navigation'}, navContainer);

    res.render('home', {
        navigation: ReactDOMServer.renderToString(navbarMain)
        , jumbotron: ReactDOMServer.renderToString(divJumbotron)
        , row:  ReactDOMServer.renderToString(divContainer)
        , footer: ReactDOMServer.renderToString(footer)
    });
});

module.exports = router;