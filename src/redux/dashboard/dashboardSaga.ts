import { call, takeLatest } from 'redux-saga/effects';
import { fetchApi } from '../../client_services/fetchAPI';
import { types } from './actionTypes';

interface Coin {
    current_price: number;
    id: string;
    image: string;
    market_cap: number;
    symbol: string;
    [x: string]: number | string;
}

type CoinData = Coin[];

function* getCryptoCoins() {
    try {
        const data: CoinData = yield call(
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

        console.log('data', adjustedData);
    } catch (error) {}
}

function* DashboardSagas() {
    yield takeLatest(types.GET_COINS_BY_MARKET, getCryptoCoins);
}

export default DashboardSagas;
