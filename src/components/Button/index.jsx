import React from 'react';

import './index.css';

const Button = ({ text, children, ...props }) => {
  return (
    <button className="button" {...props} >{text || children}</button>
  );
};

export default Button;