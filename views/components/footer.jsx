var React = require('react');

var ImageILO = React.createClass({
    render: function() {
        return (
            <img src="images/ilo.png" className="img-responsive" />
        );
    }
});

var ImageACTEMP = React.createClass({
    render: function() {
        return (
            <img src="images/actemp.png"
                className="img-responsive pull-right css-index-footer-right" />
        );
    }
});

var DivLeft6 = React.createClass({
    render: function() {
        return (
            <div className="col-lg-6 text-left"><ImageILO /></div>
        );
    }
});

var DivRight6 = React.createClass({
    render: function() {
        return (
            <div className="col-lg-6 text-right"><ImageACTEMP /></div>
        );
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <div className="container css-index-footer"><DivLeft6 /><DivRight6 /></div>
        );
    }
});

module.exports = Footer;