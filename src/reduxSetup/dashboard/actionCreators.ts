import {
    DashboardTypes,
    GetCoinsByMarketRequest,
    GetCoinsByMarketSuccessPayload,
    GetCoinsByMarketFailurePayload,
    GetCoinsByMarketSuccess,
    GetCoinsByMarketFailure,
} from 'reduxSetup/dashboard/actionTypes';

// types
import { CoinsByMarketPayload } from 'client_services/services/types';

const getCoinsByMarket = (
    payload?: CoinsByMarketPayload
): GetCoinsByMarketRequest => {
    return {
        type: DashboardTypes.GET_COINS_BY_MARKET,
        payload: payload || [],
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
