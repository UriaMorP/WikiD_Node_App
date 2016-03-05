"use strict";
const React = require('react');

let TextField = React.createClass({
    render: function() {
        // console.log()
        let style = this.props.inputRef.includes("ssword") ? "password":"text";
        let class_name = "form-control"+this.props.setClass;
        return (
			<div>
			<div className={this.props.textStyle}>{this.props.textFieldName}</div>
			<input type={style} ref={this.props.inputRef}  id={this.props.setId} value={this.props.value} onChange={this.props.update} className={class_name}/>
			</div>
        );
    }
})

module.exports = TextField;
