import React from "react";

// Icons
import { IoEarth } from "react-icons/io5";

import classes from "./style.module.scss";

export default function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <a href="/" className="nav-item link">
        Home
      </a>

      <div className="public">
        <span className="title">PUBLIC</span>
        <a href="" className="nav-item link">
          <IoEarth /> Questions
        </a>
        <a href="" className="nav-item link">
          Tags
        </a>
        <a href="" className="nav-item link">
          Users
        </a>
        <a href="" className="nav-item link">
          Companies
        </a>
      </div>
    </aside>
  );
}
