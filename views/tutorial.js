"use strict";

var React = require('react');

var Tutorial = React.createClass({
    displayName: "Tutorial",

    render: function render() {
        return React.createElement("iframe", { src: "https://www.youtube.com/embed?v=AsDnw3UxRQY&list=PLCl71clloeTKlzogT9LIhEi4AgdL8ZN59",
            className: "embed-responsive-item" });
    }
});

var DivVideo = React.createClass({
    displayName: "DivVideo",

    render: function render() {
        return React.createElement(
            "div",
            { className: "embed-responsive embed-responsive-16by9" },
            React.createElement(Tutorial, null)
        );
    }
});

var DivHomeRight = React.createClass({
    displayName: "DivHomeRight",

    render: function render() {
        return React.createElement(
            "div",
            { id: "homeRight", className: "col-lg-6 css-index-box" },
            React.createElement(DivVideo, null)
        );
    }
});

var Text1 = React.createClass({
    displayName: "Text1",

    render: function render() {
        return React.createElement(
            "p",
            { className: "virtualTourTitle1" },
            "What''s EESE data all about?"
        );
    }
});

var Text2 = React.createClass({
    displayName: "Text2",

    render: function render() {
        return React.createElement(
            "p",
            { className: "virtualTourTitle1" },
            "Why are we doing this?"
        );
    }
});

var Text3 = React.createClass({
    displayName: "Text3",

    render: function render() {
        return React.createElement(
            "p",
            { className: "virtualTourTitle2" },
            "We ''re glad you asked."
        );
    }
});

var Text4 = React.createClass({
    displayName: "Text4",

    render: function render() {
        return React.createElement(
            "p",
            { className: "virtualTourTitle2" },
            "Watch the 7 videos to master the application!"
        );
    }
});

var Text5 = React.createClass({
    displayName: "Text5",

    render: function render() {
        return React.createElement(
            "p",
            { className: "virtualTourTitle2" },
            "Explore more about EESE data at Learn More!"
        );
    }
});

var SpanMenu = React.createClass({
    displayName: "SpanMenu",

    render: function render() {
        return React.createElement("span", { className: "glyphicon glyphicon-menu-right", ariaHidden: "true" });
    }
});

var LearnMoreBtn = React.createClass({
    displayName: "LearnMoreBtn",

    render: function render() {
        return React.createElement(
            "a",
            { className: "btn btn-info", href: "/learn", role: "button" },
            "Learn More",
            React.createElement(SpanMenu, null)
        );
    }
});

var Pel = React.createClass({
    displayName: "Pel",

    render: function render() {
        return React.createElement(
            "p",
            null,
            React.createElement(LearnMoreBtn, null)
        );
    }
});

var DivRight = React.createClass({
    displayName: "DivRight",

    render: function render() {
        return React.createElement(
            "div",
            { className: "text-right" },
            React.createElement(Pel, null)
        );
    }
});

var SpanMenuDown = React.createClass({
    displayName: "SpanMenuDown",

    render: function render() {
        return React.createElement("span", { className: "glyphicon glyphicon-menu-down", ariaHidden: "true" });
    }
});

var VirtualTourTitle = React.createClass({
    displayName: "VirtualTourTitle",

    render: function render() {
        return React.createElement(
            "h2",
            { id: "virtualTourTitle" },
            "VIRTUAL TOUR",
            React.createElement(SpanMenuDown, null)
        );
    }
});

var DivHomeLeft = React.createClass({
    displayName: "DivHomeLeft",

    render: function render() {
        return React.createElement(
            "div",
            { id: "homeLeft", className: "col-lg-6 text-left css-index-box" },
            React.createElement(VirtualTourTitle, null),
            React.createElement("br", null),
            React.createElement(Text1, null),
            React.createElement(Text2, null),
            React.createElement(Text3, null),
            React.createElement(Text4, null),
            React.createElement(Text5, null),
            React.createElement(DivRight, null)
        );
    }
});

var DivRow = React.createClass({
    displayName: "DivRow",

    render: function render() {
        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(DivHomeLeft, null),
            React.createElement(DivHomeRight, null)
        );
    }
});

var DivContainer = React.createClass({
    displayName: "DivContainer",

    render: function render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(DivRow, null)
        );
    }
});

module.exports = DivContainer;