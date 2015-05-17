'use strict';

var React = require('react');

var Component = React.createClass({
  displayName: 'Component',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'Component Content'
    );
  }
});

module.exports = Component;