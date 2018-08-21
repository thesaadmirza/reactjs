import Form from "./common/form";
import React from "react";
import Joi from "joi-browser";
class RegisterForm extends Form {
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    name: Joi.string().required()
  };
  doSubmit() {
    console.log("Submitted");
  }
  render() {
    return (
      <div className="col-6 mx-auto">
        <h1>Register Form</h1>
        <form onSubmit={this.handlesubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          <div>{this.renderButton("Register")}</div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
