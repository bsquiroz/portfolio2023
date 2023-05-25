import { useContext } from "react";
import { PortfolioContext } from "../context/portfolioContext";

export const usePortfolioContext = () => {
    return useContext(PortfolioContext);
};
