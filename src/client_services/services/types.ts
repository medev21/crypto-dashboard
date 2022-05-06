export type CoinsByMarketPayload = [string];

export interface FetchConfig {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    payload?: any;
}
