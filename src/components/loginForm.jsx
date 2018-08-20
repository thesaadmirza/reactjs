import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };
  validate = () => {
    const errors = { ...this.state.errors };
    if (this.state.account.username.trim() === "") {
      errors.username = "Username Field is required";
    } else {
      errors.username = null;
    }
    if (this.state.account.password.trim() === "") {
      errors.password = "Password Field is required";
    } else {
      errors.password = null;
    }
    this.setState({ errors });
    if (errors) {
      return errors;
    } else {
      return null;
    }
  };
  handlesubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
  };
  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
