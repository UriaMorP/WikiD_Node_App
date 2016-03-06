/* eslint-disable */
const React = require('react');
let LoginForm = require('./forms/Login.jsx');
let SignUpForm = require('./forms/Signup.jsx');
let Toggler = require('./forms/Toggler.jsx');
/*eslint-enable*/


var Welcome = React.createClass({
	getInitialState: function() {
		return {showLogin: true};
	},
	handleClick: function() {
		this.setState({
			showLogin: !this.state.showLogin
		});
	},
	render: function() {
		return (
			<div>
			<div className="form_container">{this.state.showLogin?<LoginForm/>:<SignUpForm/>}</div>
			<Toggler onEvent={this.handleClick} checked={this.state.showLogin} />
			</div>
		)
	}
})

module.exports = Welcome;
