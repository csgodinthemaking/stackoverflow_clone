import React from "react";

import { GoSearch } from "react-icons/go";
import { Button } from "@/components/common";

import LogoPNG from "@/assets/image/logo-stackoverflow.png";
import classes from "./style.module.scss";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <img className="logo" src={LogoPNG} alt="StackOverflow" />

      <div className="search">
        <GoSearch />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="auth-btns">
        <Button variant="secondary">Log in</Button>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
}
