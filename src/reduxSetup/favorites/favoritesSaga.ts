// dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// methods
import { fetchApi } from 'client_services/fetchAPI';
import { DASHBOARD_CREATORS } from 'reduxSetup/dashboard/actionCreators';

// types
import { DashboardTypes } from 'reduxSetup/dashboard/actionTypes';
export function* getCryptoFavorites(coinIds) {
    try {
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

function* FavoritesSagas() {
    yield takeLatest(DashboardTypes.GET_COINS_BY_MARKET, getCryptoFavorites);
}

export default FavoritesSagas;
