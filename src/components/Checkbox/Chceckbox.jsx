import * as React from "react";

const Checkbox = ({ label, value, name, className, onChange, children }) => {
  return (
    <label className={`${className}`}>
      <input
        className={`${className}__input`}
        type="checkbox"
        checked={value}
        name={name}
        onChange={onChange}
      />

      <span className={`${className}__text`}>{children}</span>
    </label>
  );
};

export default Checkbox;
