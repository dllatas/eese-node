var React = require('react');

var Tutorial = React.createClass({
    render: function() {
        return (
            <iframe src="https://www.youtube.com/embed?v=AsDnw3UxRQY&amp;list=PLCl71clloeTKlzogT9LIhEi4AgdL8ZN59"
                className="embed-responsive-item" />
        );
    }
});

var Username = React.createClass({
    render: function() {
        return (
            <input id='username' type='text' placeholder="Username" className="form-control"/>
        );
    }
});

var UsernameForm = React.createClass({
    render: function() {
        return (
            <div className="form-group">
                <Username />
            </div>
        );
    }
});

var PasswordField = React.createClass({
    render: function() {
        return (
            <input id='password' type='password' placeholder="Password" className="form-control" />
        );
    }
});

var PasswordForm = React.createClass({
    render: function() {
        return (
            <div className="form-group">
                <PasswordField />
            </div>
        );
    }
});

var SignInBtn = React.createClass({
    render: function() {
        return (
            <button id='signIn' type='button' className='btn btn-success'>
                Sign in
            </button>
        );
    }
});

var RecoverSpan = React.createClass({
    render: function() {
        return (
            <span className='glyphicon glyphicon-lock' ariaHidden='true'></span>
        );
    }
});

var RecoverBtn = React.createClass({
    render: function() {
        return (
            <button id='recoverPass' type='button' className='btn btn-info' ariaLabel='Recover Password'>
                <RecoverSpan />
            </button>
        );
    }
});

var NavbarForm = React.createClass({
    render: function() {
        return (
            <form className='navbar-form navbar-right' role='form'>
                <UsernameForm /><PasswordForm /><SignInBtn /><RecoverBtn />
            </form>
        );
    }
});

var Navbar = React.createClass({
    render: function() {
        return (
            <div id='navbar' className='navbar-collapse collapse'>
                <NavbarForm />
            </div>
        );
    }
});

var SpanSR= React.createClass({
    render: function() {
        return (
            <span className='sr-only'>
            Toggle navigation
            </span>
        );
    }
});

var SpanIcon = React.createClass({
    render: function() {
        return (
            <span className='icon-bar'>
            </span>
        );
    }
});

var BtnNavToggle = React.createClass({
    render: function() {
        return (
            <button type="button" className="navbar-toggle collapsed"
            dataToggle="collapse" dataTarget="#navbar" ariaExpanded="false" ariaControls="navbar">
                <SpanSR /><SpanIcon /><SpanIcon /><SpanIcon />
            </button>
        );
    }
});

var NavbarHeader = React.createClass({
    render: function() {
        return (
            <div className='navbar-header'>
                <BtnNavToggle />
            </div>
        );
    }
});

var NavContainer = React.createClass({
    render: function() {
        return (
            <div className='container'>
                <NavbarHeader />
                <Navbar />
            </div>
        );
    }
});

var NavbarMain = React.createClass({
    render: function() {
        return (
            <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
                <NavContainer />
            </nav>
        );
    }
});

module.exports = NavbarMain;