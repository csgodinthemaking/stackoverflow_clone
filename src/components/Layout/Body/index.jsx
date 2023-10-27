import React from "react";

// Components
import Sidebar from "./Sidebar";
import Content from "./Content";

// Scoped style
import classes from "./style.module.scss";
import "@/assets/style/itisit-container.css";

export default function Body() {
  return (
    <main className={`itisit-container ${classes.body}`}>
      <Sidebar />
      <Content />
    </main>
  );
}
