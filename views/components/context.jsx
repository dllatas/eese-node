var React = require('react');

var ContextOption = React.createClass({
    render: function () {
        return(<option value={this.props.value}>{this.props.text}</option>);
    }
});

var ContextSelect = React.createClass({
    getInitialState: function () {
        return {data: this.props.data};
    },
    render: function () {
        var that = this;
        var ContextNodes = this.props.data.map(function (item, index) {
            return (
                <ContextOption key={item.id} value={item.id} text={item.name}></ContextOption>
            );
        });
        return (
            <select>{ContextNodes}</select>
        )
    }
});

module.exports = ContextSelect;