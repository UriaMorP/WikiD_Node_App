"use strict";
const React = require('react');
let TextField = require('./TextField.jsx');
const request = require('superagent');
const superagentPromisePlugin = require('superagent-promise-plugin');
let ErrorTag = require('../general/ErrorTag.jsx');

let SignUpForm = React.createClass({
    getInitialState:function(){
        return{
            matchingPasswords:true,
            signup_error:false,
            signup_error_message:""
        }
    },
    update:function(e){
        if(this.refs.password.refs.signup_password.value === this.refs.verify_password.refs.signup_verify_password.value){
            this.setState({matchingPasswords:true});
        }
        else{
            this.setState({matchingPasswords:false});
        }
    },
    send:function() {

        let password = this.refs.password.refs.signup_password.value;
		let email = this.refs.email.refs.signup_email.value;
        let name = this.refs.name.refs.signup_name.value;
		request.post('/signup')
		.send({"email":email, "password":password, "name": name}).set('Accept', 'application/json')
        .end((err, res)=>{
            if(err){
    			this.setState({
    				signup_error:true,
    				signup_error_message:res.text
    			})
            } else{
                this.loginSuccess(res.data.token)
            }
        })

    },
    render: function() {
		let signupError = this.state.signup_error ? <ErrorTag errStyle="inline_error" msg={this.state.signup_error_message} />: null;
        let matchPasswords = this.state.matchingPasswords ? null : <ErrorTag errStyle="inline_error" msg="passwords don't match"></ErrorTag>;
        return (
			/*jshit ignore:start*/
			<div>
			<div className="form_title" > Signup </div>
			<form >
                <TextField ref="name" inputRef="signup_name" textFieldName="name:"   setClass="from_input_override" update={this.update} />
				<TextField ref="email" inputRef="signup_email" textFieldName="Email:"   setClass="from_input_override" update={this.update} />
				<TextField ref="password" inputRef="signup_password" textFieldName="password:"  setClass="from_input_override" update={this.update} />
				<TextField ref="verify_password" inputRef="signup_verify_password" setClass="from_input_override" textFieldName="verify password:" update={this.update} />
                {matchPasswords}
            </form>
            <div className="center_btns">
                <button onClick={this.send} className="btn btn_cl">send</button>
            </div>
    			{signupError}
			</div>
			/*jshit ignore:end*/
        );
    }
})

module.exports = SignUpForm;
