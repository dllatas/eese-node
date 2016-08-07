"use strict";

var React = require('react');

var ImageEESE = React.createClass({
    displayName: "ImageEESE",

    render: function render() {
        return React.createElement("img", { src: "images/eese.png", className: "img-responsive center-block css-header-page-img" });
    }
});

var DivCenter12 = React.createClass({
    displayName: "DivCenter12",

    render: function render() {
        return React.createElement(
            "div",
            { className: "col-lg-12 text-center" },
            React.createElement(ImageEESE, null)
        );
    }
});

var DivContainer2 = React.createClass({
    displayName: "DivContainer2",

    render: function render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(DivCenter12, null)
        );
    }
});

var DivJumbotron = React.createClass({
    displayName: "DivJumbotron",

    render: function render() {
        return React.createElement(
            "div",
            { className: "jumbotron" },
            React.createElement(DivContainer2, null)
        );
    }
});

module.exports = DivJumbotron;