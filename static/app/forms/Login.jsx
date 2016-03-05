"use strict";
const React = require('react');
let TextField = require('./TextField.jsx');
const request = require('superagent');
const superagentPromisePlugin = require('superagent-promise-plugin');
let ErrorTag = require('../general/ErrorTag.jsx');

let LoginForm = React.createClass({
	getInitialState:function(){
        return{
            login_error:false,
			login_error_message:""
        }
    },
	update:function(e){
    },
    send:function(ev) {
		// console.log(this.refs);
		let password = this.refs.password.refs.login_password.value;
		let email = this.refs.email.refs.login_email.value;
		request.post('/login').use(superagentPromisePlugin)
		.send({"email":email, "password":password}).set('Accept', 'application/json').end()
		.then((data)=>this.loginSuccess(data.text))
		.catch((err)=>{
			this.setState({
				login_error:true,
				login_error_message:err.message
			})
		});
    },
    render: function() {
		let loginError = this.state.login_error ? <ErrorTag errStyle="inline_error" msg={this.state.login_error_message} />: null;
        return (
			/*jshit ignore:start*/
			<div>
			<div className="form_title" > Login </div>
			<form >
				<TextField ref="email" inputRef="login_email" textFieldName="Email:"  update={this.update} />
				<TextField ref="password" inputRef="login_password" textFieldName="password:" update={this.update} />
			</form>
			<div className="center_btns">
				<button onClick={this.send} className="btn btn_cl">send</button>
			</div>
			{loginError}
			</div>
			/*jshit ignore:end*/
        );
    }
})

module.exports = LoginForm;
