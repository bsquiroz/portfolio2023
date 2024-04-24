import React from "react";
import ReactDOM from "react-dom/client";

import { PortfolioProvider } from "./context/portfolioContext.jsx";
import './utils/i18n';

import { App } from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <PortfolioProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </PortfolioProvider>
);
