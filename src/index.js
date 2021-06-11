import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import './index.css';
import { FavoritesContextProvider } from './store/favorites-context'

ReactDOM.render(
  <FavoritesContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
