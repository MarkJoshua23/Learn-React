import clsx from "clsx";
import React from "react";

const Button = ({icon,children}) => {
  return (
    <button className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group')}>
        {children}
    </button>
  );
};

export default Button;
