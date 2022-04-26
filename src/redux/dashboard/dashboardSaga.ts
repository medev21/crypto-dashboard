// dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// methods
import { fetchApi } from '../../client_services/fetchAPI';
import { DASHBOARD_CREATORS } from './actionCreators';

// types/models
import { DashboardTypes } from './actionTypes';
import { RawCoin } from '../../common/models/ICoins';

export function* getCryptoCoins(): any {
    try {
        const data: RawCoin[] = yield call(
            fetchApi,
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        );
        const adjustedData = data.map((coin) => {
            const { current_price, id, image, market_cap, symbol } = coin;
            return {
                currentPrice: current_price,
                id,
                image,
                marketCap: market_cap,
                symbol,
            };
        });
        yield put(
            DASHBOARD_CREATORS.getCoinsByMarketSuccess({ coins: adjustedData })
        );
    } catch (error) {
        if (error instanceof Error) {
            yield put(
                DASHBOARD_CREATORS.getCoinsByMarketFailure({
                    error: error.message,
                })
            );
        }
    }
}

function* DashboardSagas() {
    yield takeLatest(DashboardTypes.GET_COINS_BY_MARKET, getCryptoCoins);
}

export default DashboardSagas;
