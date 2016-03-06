"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

/* eslint-disable */

const Router 		= require('react-router').Router;
const Link 			= require('react-router').Link;
const RouteHandler 	= require('react-router').RouteHandler;
const Route 		= require('react-router').Route;
const Redirect		= require('react-router').Redirect;

let Welcome = require('./components/Welcome.jsx');
let App = require('./components/Application.jsx');

var Start = React.createClass({
/*eslint-enable*/
	render: function() {
        return (
			<div className="nav">
				  <div className="cu_nav_label"><Link to="/home">Home</Link></div>
				  <div className="cu_nav_label"><Link to="login">Login</Link></div>
				  <div className="cu_nav_label"><Link to="/app">Play</Link></div>
				  {this.props.children}
			</div>
		)
	}
})

const About = React.createClass({
		render: function() {
			return(
				<div className="about_pr">A demo usecase app for the wikiD python engine</div>
			)
		}
})

// ReactDOM.render(<Start />, document.getElementById('app_start'));



ReactDOM.render((
  <Router>
    <Route path="/" component={Start}>
		<Redirect from="/" to="/home" />
      <Route path="login" component={Welcome} />
      <Route path="home" component={About} />
	  <Route path="app" component={App} />
    </Route>
  </Router>
), document.getElementById('app_start'))
