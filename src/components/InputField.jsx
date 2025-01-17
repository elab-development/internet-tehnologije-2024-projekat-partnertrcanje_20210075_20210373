import React from 'react';
import './InputField.css';

const InputField = ({ label, type, value, onChange, placeholder, required }) => {
  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
