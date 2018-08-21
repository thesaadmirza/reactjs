import React from "react";

const Input = ({ name, label, errors, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} className="form-control" id={name} />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
