import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./reset.css";
import App from "./App";
import LibraryProvider from "./store/library-context";
import UserProvider from "store/user-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <LibraryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LibraryProvider>
    </React.StrictMode>
  </BrowserRouter>
);
