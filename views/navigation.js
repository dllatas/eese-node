"use strict";

var React = require('react');

var Tutorial = React.createClass({
    displayName: "Tutorial",

    render: function render() {
        return React.createElement("iframe", { src: "https://www.youtube.com/embed?v=AsDnw3UxRQY&list=PLCl71clloeTKlzogT9LIhEi4AgdL8ZN59",
            className: "embed-responsive-item" });
    }
});

var Username = React.createClass({
    displayName: "Username",

    render: function render() {
        return React.createElement("input", { id: "username", type: "text", placeholder: "Username", className: "form-control" });
    }
});

var UsernameForm = React.createClass({
    displayName: "UsernameForm",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(Username, null)
        );
    }
});

var PasswordField = React.createClass({
    displayName: "PasswordField",

    render: function render() {
        return React.createElement("input", { id: "password", type: "password", placeholder: "Password", className: "form-control" });
    }
});

var PasswordForm = React.createClass({
    displayName: "PasswordForm",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(PasswordField, null)
        );
    }
});

var SignInBtn = React.createClass({
    displayName: "SignInBtn",

    render: function render() {
        return React.createElement(
            "button",
            { id: "signIn", type: "button", className: "btn btn-success" },
            "Sign in"
        );
    }
});

var RecoverSpan = React.createClass({
    displayName: "RecoverSpan",

    render: function render() {
        return React.createElement("span", { className: "glyphicon glyphicon-lock", ariaHidden: "true" });
    }
});

var RecoverBtn = React.createClass({
    displayName: "RecoverBtn",

    render: function render() {
        return React.createElement(
            "button",
            { id: "recoverPass", type: "button", className: "btn btn-info", ariaLabel: "Recover Password" },
            React.createElement(RecoverSpan, null)
        );
    }
});

var NavbarForm = React.createClass({
    displayName: "NavbarForm",

    render: function render() {
        return React.createElement(
            "form",
            { className: "navbar-form navbar-right", role: "form" },
            React.createElement(UsernameForm, null),
            React.createElement(PasswordForm, null),
            React.createElement(SignInBtn, null),
            React.createElement(RecoverBtn, null)
        );
    }
});

var Navbar = React.createClass({
    displayName: "Navbar",

    render: function render() {
        return React.createElement(
            "div",
            { id: "navbar", className: "navbar-collapse collapse" },
            React.createElement(NavbarForm, null)
        );
    }
});

var SpanSR = React.createClass({
    displayName: "SpanSR",

    render: function render() {
        return React.createElement(
            "span",
            { className: "sr-only" },
            "Toggle navigation"
        );
    }
});

var SpanIcon = React.createClass({
    displayName: "SpanIcon",

    render: function render() {
        return React.createElement("span", { className: "icon-bar" });
    }
});

var BtnNavToggle = React.createClass({
    displayName: "BtnNavToggle",

    render: function render() {
        return React.createElement(
            "button",
            { type: "button", className: "navbar-toggle collapsed",
                dataToggle: "collapse", dataTarget: "#navbar", ariaExpanded: "false", ariaControls: "navbar" },
            React.createElement(SpanSR, null),
            React.createElement(SpanIcon, null),
            React.createElement(SpanIcon, null),
            React.createElement(SpanIcon, null)
        );
    }
});

var NavbarHeader = React.createClass({
    displayName: "NavbarHeader",

    render: function render() {
        return React.createElement(
            "div",
            { className: "navbar-header" },
            React.createElement(BtnNavToggle, null)
        );
    }
});

var NavContainer = React.createClass({
    displayName: "NavContainer",

    render: function render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(NavbarHeader, null),
            React.createElement(Navbar, null)
        );
    }
});

var NavbarMain = React.createClass({
    displayName: "NavbarMain",

    render: function render() {
        return React.createElement(
            "nav",
            { className: "navbar navbar-inverse navbar-fixed-top", role: "navigation" },
            React.createElement(NavContainer, null)
        );
    }
});

module.exports = NavbarMain;