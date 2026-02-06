// Shared TypeScript types
export interface Stock {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    quantity?: number;
    isCrypto?: boolean;
}

export interface Portfolio {
    id: string;
    name: string;
    stocks: Stock[];
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export * from './types';
