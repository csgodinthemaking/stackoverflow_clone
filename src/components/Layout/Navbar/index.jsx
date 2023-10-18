import React from "react";

import LogoPNG from "@/assets/image/logo-stackoverflow.png";
import classes from "./style.module.scss";
//scss和css没有特大区别，可以写嵌套语法，mixin也是必用的。会让写样式效率提高
export default function Navbar() {
  return (
    //alt是网络不好或因为其他原因无法显示图的时候，会显示里面的内容。另外也可以用作搜索的关键词。
    <nav className={classes.navbar}>
      <img className="logo" src={LogoPNG} alt="StackOverflow" />
    </nav>
  );
}
