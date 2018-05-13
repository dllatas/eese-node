var React = require('react');

var PillarOption = React.createClass({
    render: function () {
        return(<option value={this.props.value}>{this.props.text}</option>);
    }
});

var PillarSelect = React.createClass({
    getInitialState: function () {
        return {data: this.props.data};
    },
    render: function () {
        var that = this;
        var PillarNodes = this.props.data.map(function (item, index) {
            if (item.id === that.props.value) {
                return (
                    <PillarOption key={item.id} value={item.id} text={item.name}></PillarOption>
                );
            }
        });
        return (
            <select multiple>{PillarNodes}</select>
        )
    }
});

module.exports = PillarSelect;