var React = require('react');

var Tutorial = React.createClass({
    render: function() {
        return (
            <iframe src="https://www.youtube.com/embed?v=AsDnw3UxRQY&amp;list=PLCl71clloeTKlzogT9LIhEi4AgdL8ZN59"
                className="embed-responsive-item" />
        );
    }
});

var DivVideo = React.createClass({
    render: function() {
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <Tutorial />
            </div>
        );
    }
});

var DivHomeRight  = React.createClass({
    render: function() {
        return (
            <div id='homeRight' className="col-lg-6 css-index-box">
                <DivVideo />
            </div>
        );
    }
});

var Text1 = React.createClass({
    render: function() {
        return (
            <p className='virtualTourTitle1'>What''s EESE data all about?</p>
        );
    }
});

var Text2 = React.createClass({
    render: function() {
        return (
            <p className='virtualTourTitle1'>Why are we doing this?</p>
        );
    }
});

var Text3 = React.createClass({
    render: function() {
        return (
            <p className='virtualTourTitle2'>We ''re glad you asked.</p>
        );
    }
});

var Text4 = React.createClass({
    render: function() {
        return (
            <p className='virtualTourTitle2'>Watch the 7 videos to master the application!</p>
        );
    }
});

var Text5 = React.createClass({
    render: function() {
        return (
            <p className='virtualTourTitle2'>Explore more about EESE data at Learn More!</p>
        );
    }
});

var SpanMenu = React.createClass({
    render: function() {
        return (
            <span className='glyphicon glyphicon-menu-right' aria-hidden='true' />
        );
    }
});

var LearnMoreBtn = React.createClass({
    render: function() {
        return (
            <a className='btn btn-info' href="/learn" role="button" >
                Learn More
                <SpanMenu />
            </a>
        );
    }
});

var Pel  = React.createClass({
    render: function() {
        return (
            <p><LearnMoreBtn /></p>
        );
    }
});

var DivRight = React.createClass({
    render: function() {
        return (
            <div className='text-right'><Pel /></div>
        );
    }
});

var SpanMenuDown = React.createClass({
    render: function() {
        return (
            <span className='glyphicon glyphicon-menu-down' aria-hidden='true' />
        );
    }
});

var VirtualTourTitle = React.createClass({
    render: function() {
        return (
            <h2 id='virtualTourTitle'>
                VIRTUAL TOUR
                <SpanMenuDown />
            </h2>
        );
    }
});

var DivHomeLeft = React.createClass({
    render: function() {
        return (
            <div id='homeLeft' className='col-lg-6 text-left css-index-box'>
                <VirtualTourTitle/>
                <br/>
                <Text1/><Text2/><Text3/><Text4/><Text5/>
                <DivRight/>
            </div>
        );
    }
});

var DivRow = React.createClass({
    render: function() {
        return (
            <div className='row'>
                <DivHomeLeft/>
                <DivHomeRight/>
            </div>
        );
    }
});

var DivContainer = React.createClass({
    render: function() {
        return (
            <div className='container'>
                <DivRow />
            </div>
        );
    }
});

module.exports = DivContainer;