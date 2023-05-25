/* eslint-disable react/prop-types */
import { createContext } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    const store = {};

    return (
        <PortfolioContext.Provider value={store}>
            {children}
        </PortfolioContext.Provider>
    );
};
