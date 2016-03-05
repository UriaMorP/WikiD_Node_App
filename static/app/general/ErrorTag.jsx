"use strict";
const React = require('react');

let ErrorTag = React.createClass({
    render: function() {
        return (
			<div className={this.props.errStyle}>{this.props.msg}</div>
        );
    }
})

module.exports = ErrorTag;
