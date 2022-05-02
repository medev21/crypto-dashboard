import {
    DashboardTypes,
    GetCoinsByMarketRequest,
    GetCoinsByMarketSuccessPayload,
    GetCoinsByMarketFailurePayload,
    GetCoinsByMarketSuccess,
    GetCoinsByMarketFailure,
} from 'reduxSetup/dashboard/actionTypes';

const getCoinsByMarket = (): GetCoinsByMarketRequest => {
    return {
        type: DashboardTypes.GET_COINS_BY_MARKET,
    };
};

const getCoinsByMarketSuccess = (
    payload: GetCoinsByMarketSuccessPayload
): GetCoinsByMarketSuccess => {
    return {
        type: DashboardTypes.GET_COINS_BY_MARKET_SUCCESS,
        payload,
    };
};

const getCoinsByMarketFailure = (
    payload: GetCoinsByMarketFailurePayload
): GetCoinsByMarketFailure => {
    return {
        type: DashboardTypes.GET_COINS_BY_MARKET_ERROR,
        payload,
    };
};

export const DASHBOARD_CREATORS = {
    getCoinsByMarket,
    getCoinsByMarketSuccess,
    getCoinsByMarketFailure,
};
