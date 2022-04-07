import { types } from './actionTypes';

export const getCoinsByMarket = () => {
    return {
        type: types.GET_COINS_BY_MARKET,
    };
};

export const GetCoinsByMarketSuccess = () => {
    return {
        type: types.GET_COINS_BY_MARKET_SUCCESS,
    };
};

export const GetCoinsByMarketError = () => {
    return {
        type: types.GET_COINS_BY_MARKET_ERROR,
    };
};
