var React = require('react');

var ImageEESE = React.createClass({
    render: function() {
        return (
            <img src="images/eese.png" className="img-responsive center-block css-header-page-img" />
        );
    }
});

var DivCenter12 = React.createClass({
    render: function() {
        return (
            <div className="col-lg-12 text-center" >
                <ImageEESE />
            </div>
        );
    }
});

var DivContainer2 = React.createClass({
    render: function() {
        return (
            <div className="container" >
                <DivCenter12 />
            </div>
        );
    }
});

var DivJumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron" >
                <DivContainer2 />
            </div>
        );
    }
});

module.exports = DivJumbotron;