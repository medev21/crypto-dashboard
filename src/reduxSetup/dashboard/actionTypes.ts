import { FormattedCoin } from 'common/models/ICoins';

export enum DashboardTypes {
    GET_COINS_BY_MARKET = 'dashboardActionTypes/GET_COINS_BY_MARKET',
    GET_COINS_BY_MARKET_SUCCESS = 'dashboardActionTypes/GET_COINS_BY_MARKET_SUCCESS',
    GET_COINS_BY_MARKET_ERROR = 'dashboardActionTypes/GET_COINS_BY_MARKET_ERROR',
}

export interface GetState {
    coins: FormattedCoin[];
    error: string | null;
    pending: boolean;
}

export interface GetCoinsByMarketSuccessPayload {
    coins: FormattedCoin[];
}

export interface GetCoinsByMarketFailurePayload {
    error: string;
}
export interface GetCoinsByMarketRequest {
    type: typeof DashboardTypes.GET_COINS_BY_MARKET;
}

export interface GetCoinsByMarketSuccess {
    type: typeof DashboardTypes.GET_COINS_BY_MARKET_SUCCESS;
    payload: GetCoinsByMarketSuccessPayload;
}

export interface GetCoinsByMarketFailure {
    type: typeof DashboardTypes.GET_COINS_BY_MARKET_ERROR;
    payload: GetCoinsByMarketFailurePayload;
}

export type GetActions =
    | GetCoinsByMarketRequest
    | GetCoinsByMarketSuccess
    | GetCoinsByMarketFailure;
