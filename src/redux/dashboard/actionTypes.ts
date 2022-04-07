export const types = {
    GET_COINS_BY_MARKET: 'dashboardActionTypes/GET_COINS_BY_MARKET',
    GET_COINS_BY_MARKET_SUCCESS:
        'dashboardActionTypes/GET_COINS_BY_MARKET_SUCCESS',
    GET_COINS_BY_MARKET_ERROR: 'dashboardActionTypes/GET_COINS_BY_MARKET_ERROR',
};

export interface GetCoinsByMarket {
    type: typeof types.GET_COINS_BY_MARKET;
}

export interface GetCoinsByMarketSuccess {
    type: typeof types.GET_COINS_BY_MARKET_SUCCESS;
    data: [];
}

export interface GetCoinsByMarketError {
    type: typeof types.GET_COINS_BY_MARKET_ERROR;
}
