import {
    DashboardTypes,
    GetCoinsByMarketRequest,
    GetCoinsByMarketSuccessPayload,
    GetCoinsByMarketFailurePayload,
    GetCoinsByMarketSuccess,
    GetCoinsByMarketFailure,
} from './actionTypes';

export const getCoinsByMarket = (): GetCoinsByMarketRequest => {
    return {
        type: DashboardTypes.GET_COINS_BY_MARKET,
    };
};

export const getCoinsByMarketSuccess = (
    payload: GetCoinsByMarketSuccessPayload
): GetCoinsByMarketSuccess => {
    return {
        type: DashboardTypes.GET_COINS_BY_MARKET_SUCCESS,
        payload,
    };
};

export const getCoinsByMarketFailure = (
    payload: GetCoinsByMarketFailurePayload
): GetCoinsByMarketFailure => {
    return {
        type: DashboardTypes.GET_COINS_BY_MARKET_ERROR,
        payload,
    };
};
