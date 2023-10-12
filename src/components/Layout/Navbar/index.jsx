import React from "react";

import LogoPNG from "@/assets/image/logo-stackoverflow.png";
import classes from "./style.module.scss";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <img className="logo" src={LogoPNG} alt="StackOverflow" />
    </nav>
  );
}
