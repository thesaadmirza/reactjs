import React from "react";

const Select = ({ name, options, label, errors, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        onChange={onChange}
        className="form-control"
        id={name}
      >
        {options.map(test => (
          <option key={test._id} value={test._id}>
            {test.name}
          </option>
        ))}
      </select>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Select;
