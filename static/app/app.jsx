"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
var LoginForm = require('./forms/Login.jsx');
var SignUpForm = require('./forms/Signup.jsx');
let Toggler = require('./forms/Toggler.jsx');

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
ReactDOM.render(< Welcome />, document.getElementById('welcome'));
