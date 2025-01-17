import React from 'react';
import './Button.css';

const Button = ({ text, onClick, style, icon }) => {
  return (
    <button className={`btn ${style}`} onClick={onClick}>
      {icon && <i className={`icon-${icon}`}></i>} {text}
    </button>
  );
};

export default Button;
