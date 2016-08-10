'use strict';

var React = require('react');

var ContextOption = React.createClass({
    displayName: 'ContextOption',

    render: function render() {
        return React.createElement(
            'option',
            { value: this.props.value },
            this.props.text
        );
    }
});

var ContextSelect = React.createClass({
    displayName: 'ContextSelect',

    getInitialState: function getInitialState() {
        return { data: this.props.data };
    },
    render: function render() {
        var that = this;
        var ContextNodes = this.props.data.map(function (item, index) {
            console.log(item);
            return React.createElement(ContextOption, { key: item.id, value: item.id, text: item.name });
        });
        return React.createElement(
            'select',
            null,
            ContextNodes
        );
    }
});

module.exports = ContextSelect;

/*getInitialState: function () {
    return {data: this.props.data};
  },
  render: function () {
    return (
      <div>
        <h1>Tweets</h1>
        <TweetList data={this.props.data} />
      </div>
    )
  }
*/