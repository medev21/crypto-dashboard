export interface HeadCellI {
    name: string;
}

export interface CoinListI {
    symbol: string;
    name: string;
    image: string;
    amount: number;
    price: number;
    value: number;
}

export interface DataTableI {
    columns: HeadCellI[];
    entries: CoinListI[];
}
