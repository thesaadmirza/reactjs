import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
import { getMovie } from "../../services/fakeMovieService";
import Joi from "joi-browser";
class Form extends Component {
  state = {
    data: this.props.match.params.id
      ? getMovie(this.props.match.params.id)
      : "",
    errors: {}
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
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
    this.doSubmit();
  };
  validateCurrent(name, value) {
    const schema = { [name]: this.schema[name] };
    const obj = { [name]: value };
    const errors = Joi.validate(obj, schema);
    if (!errors.error) return null;
    return errors.error.details[0].message;
  }
  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
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

    this.setState({ data });
  };
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    return (
      <Input
        type={type}
        name={name}
        value={this.state.data[name]}
        label={label}
        errors={this.state.errors[name]}
        onChange={this.handleChange}
      />
    );
  }
  renderSelect(name, label, options) {
    return (
      <Select
        name={name}
        label={label}
        options={options}
        selected={this.state.data[name]}
        errors={this.state.errors[name]}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
