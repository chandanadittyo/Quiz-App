import React from "react";

// eslint-disable-next-line react/prop-types
const Checkbox = ({ className, text, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
};

export default Checkbox;
