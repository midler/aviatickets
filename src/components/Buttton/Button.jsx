import * as React from "react";

const Button = ({ className, children }) => {
  return (
    <button className={`button`} type="button">
      {children}
    </button>
  );
};

export default Button;
