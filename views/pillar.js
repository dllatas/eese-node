'use strict';

var React = require('react');

var PillarOption = React.createClass({
    displayName: 'PillarOption',

    render: function render() {
        return React.createElement(
            'option',
            { value: this.props.value },
            this.props.text
        );
    }
});

var PillarSelect = React.createClass({
    displayName: 'PillarSelect',

    getInitialState: function getInitialState() {
        return { data: this.props.data };
    },
    render: function render() {
        var that = this;
        var PillarNodes = this.props.data.map(function (item, index) {
            if (item.id === that.props.value) {
                return React.createElement(PillarOption, { key: item.id, value: item.id, text: item.name });
            }
        });
        return React.createElement(
            'select',
            { multiple: true },
            PillarNodes
        );
    }
});

module.exports = PillarSelect;