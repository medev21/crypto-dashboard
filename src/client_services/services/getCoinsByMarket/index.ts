// constants
import { baseURL, API_PATHS } from 'client_services/constants';

// services
import { fetchApi } from 'client_services/services/fetchAPI';

// types
import {
    CoinsByMarketPayload,
    FetchConfig,
} from 'client_services/services/types';

export const getCoinsByMarket = (coinIds?: CoinsByMarketPayload) => {
    // initialize url object
    const url = new URL(baseURL + API_PATHS.COINS_BY_MARKET);

    // set to US dollar by default
    url.searchParams.set('vs_currency', 'usd');

    // set in descending order by default
    url.searchParams.set('order', 'market_cap_desc');

    /**
     * set coins into URL, join them by comman
     * for example
     *
     * bitcoin,ethereum
     *
     * see coingecko documentation for info
     *
     * https://www.coingecko.com/en/api/documentation
     */
    if (typeof coinIds !== 'undefined' && coinIds.length) {
        url.searchParams.set('ids', coinIds.join(','));
    }
    const getConfig: FetchConfig = {
        url: url.href,
        method: 'GET',
    };

    /**
     * use fetchapi method to pass
     * getConfig options
     */
    return fetchApi(getConfig);
};
