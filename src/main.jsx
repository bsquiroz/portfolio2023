import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

import { PortfolioProvider } from "./context/portfolioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <PortfolioProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </PortfolioProvider>
);
