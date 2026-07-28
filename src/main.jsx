import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { GlobalStyle } from "./styles/GlobalStyle";

// 앱의 진입점입니다. 전역 스타일을 깔고 라우터를 화면에 연결합니다.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
