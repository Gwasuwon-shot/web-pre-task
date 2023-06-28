import "./index.css";

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <link 
      rel="stylesheet"
      as="style"
      crossOrigin="anonymous"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
    <link href="https://webfontworld.github.io/kt/YDestreet.css" rel="stylesheet" />
    <App />
  </React.StrictMode>,
);
