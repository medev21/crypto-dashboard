export interface RawCoin {
    current_price: number;
    id: string;
    image: string;
    market_cap: number;
    symbol: string;
    [x: string]: number | string;
}
export interface FormattedCoin {
    currentPrice: number;
    id: string;
    image: string;
    marketCap: number;
    symbol: string;
}
