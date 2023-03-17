import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./reset.css";
import { CommonMain } from "./style/Common";

import App from "./App";
import LibraryProvider from "./store/library-context";
import UserProvider from "store/user-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LibraryProvider>
      <UserProvider>
        <CommonMain className='common-style'>
          <App />
        </CommonMain>
      </UserProvider>
    </LibraryProvider>
  </BrowserRouter>
);
