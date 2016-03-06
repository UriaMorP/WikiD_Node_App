"use strict";
const React = require('react');

let Toggler = React.createClass({
    render: function() {
		let toggleClass = this.props.checked ? 'login_btn' : 'signup_btn';
		toggleClass+=" btn_tgl"
		let toggleText = this.props.checked ? 'signup': 'login';
        return (
			<div onClick={this.props.onEvent} className={toggleClass}>{toggleText}</div>
        );
    }
})

module.exports = Toggler;
