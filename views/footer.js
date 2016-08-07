"use strict";

var React = require('react');

var ImageILO = React.createClass({
    displayName: "ImageILO",

    render: function render() {
        return React.createElement("img", { src: "images/ilo.png", className: "img-responsive" });
    }
});

var ImageACTEMP = React.createClass({
    displayName: "ImageACTEMP",

    render: function render() {
        return React.createElement("img", { src: "images/actemp.png",
            className: "img-responsive pull-right css-index-footer-right" });
    }
});

var DivLeft6 = React.createClass({
    displayName: "DivLeft6",

    render: function render() {
        return React.createElement(
            "div",
            { className: "col-lg-6 text-left" },
            React.createElement(ImageILO, null)
        );
    }
});

var DivRight6 = React.createClass({
    displayName: "DivRight6",

    render: function render() {
        return React.createElement(
            "div",
            { className: "col-lg-6 text-right" },
            React.createElement(ImageACTEMP, null)
        );
    }
});

var Footer = React.createClass({
    displayName: "Footer",

    render: function render() {
        return React.createElement(
            "div",
            { className: "container css-index-footer" },
            React.createElement(DivLeft6, null),
            React.createElement(DivRight6, null)
        );
    }
});

module.exports = Footer;