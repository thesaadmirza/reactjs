import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    const errors = {};
    if (!result.error) return null;
    result.error.details.forEach(test => {
      errors[test.path[0]] = test.message;
    });
    return errors;
  };
  handlesubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };
  validateCurrent(name, value) {
    const schema = { [name]: this.schema[name] };
    const obj = { [name]: value };
    const errors = Joi.validate(obj, schema);
    if (!errors.error) return null;
    return errors.error.details[0].message;
  }
  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    const name = e.currentTarget.name;
    const bul = this.validateCurrent(
      e.currentTarget.name,
      e.currentTarget.value
    );
    const errors = {};
    if (bul) {
      errors[name] = bul;
      this.setState({ errors });
    } else {
      errors[name] = "";
      this.setState({ errors });
    }

    this.setState({ account });
  };
  render() {
    return (
      <div className="col-6 mx-auto">
        <h1>Login Form</h1>
        <form onSubmit={this.handlesubmit}>
          <Input
            name="username"
            value={this.state.account.username}
            label="Username"
            errors={this.state.errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={this.state.account.password}
            label="Password"
            errors={this.state.errors.password}
            onChange={this.handleChange}
          />
          <div>
            <button disabled={this.validate()} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
