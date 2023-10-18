import React from "react";

import classes from "./style.module.scss";

export default function Button({ children, variant = "primary" }) {
  return (
    <button className={`${classes.customButton} ${classes[variant]}`}>{children}</button>
  );
}
