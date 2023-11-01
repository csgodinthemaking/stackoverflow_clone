import React from "react";

import classes from "./style.module.scss";

/**
 * 通用 Button 组件
 * @param {variant} 'primary' | 'secondary' | 'outlined'
 */
export default function Button({
  block = false,
  children,
  variant = "primary",
  className = "",
}) {
  return (
    <button
      className={`${classes.customButton} ${classes[variant]} ${
        block && classes.blockBtn
      } ${className}`}
    >
      {children}
    </button>
  );
}
