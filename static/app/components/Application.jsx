const React = require('react');

/* eslint-disable */

const Router 		= require('react-router').Router;
const Link 			= require('react-router').Link;
const RouteHandler 	= require('react-router').RouteHandler;
const Route 		= require('react-router').Route;
const Redirect		= require('react-router').Redirect;
/* eslint-enable */

var App = React.createClass({
	getInitialState: function() {
		return null;
	},
	handleClick: function() {
		this.setState({
			// showLogin: !this.state.showLogin
		});
	},
	render: function() {
		console.log("this.props", this.props);
		const app =  (
			<div className="nav nav_app app">
				  <div className="cu_nav_label_app"><Link to="create">Create a claim</Link></div>
				  <div className="cu_nav_label_app"><Link to="answer">Give your input</Link></div>
				  <div className="cu_nav_label_app"><Link to="track">Track your subscriptions</Link></div>
				  <div className="main_view">{this.props.children}</div>
			</div>
		)
			return (app)
	}
})

module.exports = App;
