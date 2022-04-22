import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchApi } from '../../client_services/fetchAPI';
import { DashboardTypes } from './actionTypes';
import { getCoinsByMarketSuccess } from './actionCreators';
import { RawCoin } from '../../common/models/ICoins';

function* getCryptoCoins() {
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
        yield put(getCoinsByMarketSuccess({ coins: adjustedData }));
    } catch (error) {}
}

function* DashboardSagas() {
    yield takeLatest(DashboardTypes.GET_COINS_BY_MARKET, getCryptoCoins);
}

export default DashboardSagas;
