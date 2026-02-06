import React, { createContext, ReactNode, useContext, useState } from "react";

type Stock = {
    symbol: string;
    name: string;
    price: number;
    quantity: number;
    portfolioId: string;
};

type StocksContextType = {
    stocks: Stock[];
    addStock: (stock: Stock) => void;
    getStocksByPortfolio: (portfolioId: string) => Stock[];
};

const StocksContext = createContext<StocksContextType | undefined>(undefined);

export function StocksProvider({ children }: { children: ReactNode }) {
    const [stocks, setStocks] = useState<Stock[]>([]);

    const addStock = (stock: Stock) => {
        setStocks((prev) => [...prev, stock]);
    };

    const getStocksByPortfolio = (portfolioId: string) => {
        return stocks.filter((stock) => stock.portfolioId === portfolioId);
    };

    return (
        <StocksContext.Provider value={{ stocks, addStock, getStocksByPortfolio }}>
            {children}
        </StocksContext.Provider>
    );
}

export function useStocks() {
    const context = useContext(StocksContext);
    if (!context) {
        throw new Error("useStocks must be used within a StocksProvider");
    }
    return context;
}

export type { Stock };
