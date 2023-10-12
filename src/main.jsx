// React & 周边库
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

// 组件
import Layout from "@/components/Layout";

// 全局 CSS
import "@/assets/style/variable.css";
import "@/assets/style/reset.css";

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <Layout />
      {/* <App /> */}
    </RecoilRoot>
  </StrictMode>,
  document.getElementById("root")
);
