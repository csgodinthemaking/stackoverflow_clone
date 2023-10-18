import React from "react";

import Navbar from "@/components/Layout/Navbar";
import Body from "@/components/Layout/Body";
import Footer from "@/components/Layout/Footer";
// 组件可以做拆分，react中最小的单元，页面上所有的东西都可以被拆分成组件。
//一般为函数，首字母是大写。
//返回jsx。文件后缀必须是jsx。
//jsx的规则，如果你想用javascript表达式的话，必须用花括号。花括号里面都会被认为是表达式，表达式和语句有区别，
//语句是if for循环等，他是被禁止的。表达式最终是要返回值的，比如调用了一个函数，他最终使返回了一个值。1+1 ，就是要经过计算的
/*
组件里的逻辑和样式是相互隔离的。
*/
export default function Layout() {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
